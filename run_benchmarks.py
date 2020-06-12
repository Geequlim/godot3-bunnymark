BENCHMARKS = [
    { 'bench': 'BunnymarkV2', 'lang': 'gd', },
    { 'bench': 'BunnymarkV2', 'lang': 'js', },
    { 'bench': 'BunnymarkV1Sprites', 'lang': 'gd', },
    { 'bench': 'BunnymarkV1Sprites', 'lang': 'js', },
    { 'bench': 'BunnymarkV1DrawTexture', 'lang': 'gd', },
    { 'bench': 'BunnymarkV1DrawTexture', 'lang': 'js', },
    { 'bench': 'fib', 'lang': 'gd', },
    { 'bench': 'fib', 'lang': 'js', },
]
import os
for b in BENCHMARKS:
    commands = ' --bench=' + b['bench'] + ' --lang=' + b['lang']
    os.system('~/Documents/Workspace/Develop/Godot/godot/bin/godot.x11.opt.64 --path . ' + commands)