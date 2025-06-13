import puppeteer from 'puppeteer-core';
import puppeteerStealth from 'puppeteer-extra-plugin-stealth';

import { parse } from 'ts-command-line-args';
import fs from 'node:fs';

interface ICopyFilesArguments {
    file: string;
    baseUrl: string,
    endUrl: string,
    watch: boolean,
    pipeConsole: boolean,
    help?: boolean;
}

export const args = parse<ICopyFilesArguments>(
    {
        file: String,
        baseUrl: String,
        endUrl: { type: String, description: 'This is the place where it will end like /timeline' },
        watch: { type: Boolean, alias: 'w', description: 'Watch for changes in this file for changes' },
        pipeConsole: { type: Boolean, alias: 'c', description: 'Pipes the browser console into your ide console' },
        //filter: { type: String, optional: true },
        help: { type: Boolean, optional: true, alias: 'h', description: 'Prints this usage guide' },
    },
    {
        helpArg: 'help',
        headerContentSections: [{ header: 'AIscript Plugin Runner by Leah', content: 'Helps when writing *key plugins' }],
        // footerContentSections: [{ header: 'Footer', content: `` }],
    },
);

(async () => {

    const browser = await puppeteer.connect({
        browserURL: 'http://127.0.0.1:9222',
    });

    const page = await browser.newPage();

    page.on('console', async msg => {
        try {
            const args = msg.args();
            const values = await Promise.all(args.map(arg => arg.jsonValue()));

            // console.log(`[browser:${msg.type()}]`, ...values);

            const first = values[0];

            if (first && typeof first === 'object' && 'type' in first && 'value' in first) {
                // Assume that if `type` exists, `value` is safe to access
                console.log(first.value ?? '');
            }
        } catch (err) {
            console.error('[Error parsing console message]', err);
        }
    });



    await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
    );

    // Navigate the page to a URL.
    await page.goto(`${args.baseUrl}/settings/plugin`);
    // Initial load
    const loadPlugin = () => {
        const data = fs.readFileSync(args.file, 'utf8');
        page.evaluate((data) => {
            const raw = localStorage.getItem('miux:plugins') ?? '[]';
            let plugins;
            try {
                plugins = JSON.parse(raw);
            } catch {
                console.error('Invalid plugin JSON');
                return;
            }

            if (!Array.isArray(plugins) || plugins.length < 1) {
                console.error("Please install your plugin manually");
                return;
            }

            plugins[0].src = data;
            localStorage.setItem('miux:plugins', JSON.stringify(plugins));
            console.log('[Plugin updated]');
        }, data).catch(console.error);
    };

    loadPlugin();

    fs.watchFile(args.file, { interval: 500 }, (curr, prev) => {
        if (curr.mtime !== prev.mtime) {
            console.log('\x1b[92m[Detected file change]\x1b[0m');
            loadPlugin();
            page.reload();
        }
    });

    await page.setViewport({ width: 1080, height: 1024 });

    await page.goto(`${args.baseUrl}${args.endUrl}`);

    console.log(args)
})()