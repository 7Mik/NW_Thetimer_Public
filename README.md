# Theta respawn Timer
The best respawn timer by the best player

THIS STANDALONE TIMER IS NOT SUPPORTED ANYMORE - PLEASE USE THE WEB VERSION INSTEAD 

The project is based on the good work made by NicoVisci here: https://github.com/NicoVisci/NW-TimerBot-Desktop

The source code is also partially obfuscated (src/renderer.js)

These are the fixes I have implemented that were dealbreaking before:

- Time is grabbed from server. Fix for people who had unsynced time or unreliable time.
- The timer process can not be throttled so it will always stay on time
- Lower CPU usage
