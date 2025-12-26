# Pronoun Plugin
A fediverse *key plugin that adds pronouns to display names

## Features
 - Shows pronouns in the username on a post
 - Works with my plural plugin & headmate hopper and fetches the right pronouns
 - Notifications when there is an update
 - Caching for pronouns
 - Ability to override pronouns for users and their headmates
 - Custom formats

## Setup
 - Copy the contents of plugin.is
 - go to your settings on your *key software
 - Go to the plugins tab
 - Click install plugins
 - Paste the code in
 - Hit install
 - It will ask you to accept some permissions. Accept them.

## How does it work
 The algorithm can find pronouns by detecting stuff with a slash inbetween them. Its smart and wont detect fractions and other things but from time to time it pulls the wrong thing.

## What are the permissions I am accepting for?
write:notifications is used to send you a notification when a new version of the plugin is released. You can turn this off in the plugin settings once its installed
read:account is for the same thing (It is used to grab a json post so it can compare versions)

## Im plural how do I get it to find my pronouns?
This works with my plural plugin and detects ` - posted by ` so set that up first.

Then edit your profile description so that it has the headmates name (exactly as entered in the plural plugin) and then the pronouns underneath it (It doesn't matter where, just do it before the next headmates section) 

Here is an example:

![image](https://github.com/ChaoticLeah/pronoun-plugin/assets/45321184/1e664521-21eb-485d-a53c-b354c900f953)


## What if I want to mention another headmate in one of my headmates bios?

If you want to mention a headmate in another headmates bio it will confuse the plugin so please escape it properly.
Lets say this is your bio:
```
Emma
Friends with Brian
She/Her

Brian
He/Him
```
This will confuse the plugin when grabbing Brian's pronouns since it will think Brian's pronouns are She/Her
To fix this please escape it like this
```
Emma
Friends with <plain>B</plain>rian
She/Her

Brian
He/Him
```
Escaping one of the letters like this will make it so the plugin won't see this as that headmate and will now correctly set Brian's pronouns to He/Him. This will also look totally normal to anyone else looking at your bio.

## Known bugs we cant fix

> The pronouns only sometimes show up

This is a misskey bug that I cannot do anything about

> The plural pronouns part doesnt work when I click into a post

Again this is a misskey bug

## Roadmap

 - Nothing, Feel free to suggest features in the issues

## Extra notes and thanks
Tested in sharkey, and misskey

Thanks to [miaapancake](https://woem.men/@miaapancake) for allowing me to use the screenshots in this readme

If there are any bugs feel free to message me on [@ChaosKitsune@woem.men](https://woem.men/@ChaosKitsune) or open an issue
