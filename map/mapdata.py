# creates image from pixel version of map, wont work with real map
from PIL import Image
from collections import Counter
from random import *
import json

image_name = "genostel"

img = Image.open(f"{image_name}.png")
pixels = img.load() 

width, height = img.size

print(width)
print(height)

def f2(lst):
   return Counter(lst).most_common(1)

def nearest_colour( subjects, query ):
    return min( subjects, key = lambda subject: sum( (s - q) ** 2 for s, q in zip( subject, query ) ) )


map = []
coloursUsed = []
incriement = 20

commonColors = ((196, 223, 255), 
                (201, 229, 178), 
                (255, 240, 189), 
                (59, 131, 21),
                (183, 133, 92),
                (255, 255, 255),  
                (203, 167, 139),
                (184, 61, 186),
                (236, 28, 36),
                (255, 255, 0),
                (227, 183, 110),
                (0, 0, 0)
                )

for x in range(0, width, incriement):
        for y in range(0, height, incriement):
                hexCount = []
                if (x + incriement < width):
                    for xx in range(x, x + incriement):
                        if (y + incriement < height):
                            for yy in range(y, y + incriement):
                                rgb = pixels[xx, yy]
                                closet_color = nearest_colour(commonColors, rgb)
                                hexCount.append(closet_color)

                    hexCount.append(hex) 
                    hexValue = f2(hexCount)
                    hexValue = [a[0] for a in hexValue]
                    hexColor = hexValue[0]
                    coloursUsed.append(hexColor)

                    if (hexColor != (196, 223, 255)):
                            t=0
                            z=0
                            if (hexColor == (201, 229, 178)): # grass
                                t = 5
                                z= 1
                                ran = randint(1, 20)
                                if (ran == 1):
                                    z = 11
                                if (ran == 2):
                                    z = 12


                            if (hexColor == (255, 240, 189)): # sand
                                t = 2
                                z = 2
                            if (hexColor == (227, 183, 110)): # sand 2
                                t = 3
                                z = 2
                            if (hexColor == (59, 131, 21)): #forest
                                t = 6
                                z = 2
                            if (hexColor == (183, 133, 92)): #moutain
                                t = 7
                                z = 4
                            if (hexColor == (203, 167, 139)): #low moutain
                                t = 4
                                z = 3
                            if (hexColor == (255, 255, 255)): #ice
                                t = 1
                                z = 2
                            if (hexColor == (184, 61, 186)): #town
                                t = 8
                                z = 2
                            if (hexColor == (236, 28, 36)): #city
                                t = 9
                                z = 2
                            if (hexColor == (255, 255, 0)): #capital city
                                t = 10
                                z = 2

                            # removes blanks if any made it through
                            if (z != 0 and t != 0):
                                value = {"x": x / incriement, "y": y / incriement, "z": z, "t": t}
                                map.append(value)


print(len(map))
# print(Counter(coloursUsed))
# print(len(Counter(coloursUsed)))

# with open("sample.json", "w") as outfile:
#     json.dump(map, outfile)


# f = open('./src/data/sample.json',)

# data = json.load(f)


sorted_data = {}
for i in map:

    terrain = i["t"]
    height = i["z"]
    temp_data = {"x": i["x"], "y": i["y"], "a": 8}
    if (terrain not in sorted_data):
        sorted_data[terrain] = {}
    
    if (height not in sorted_data[terrain]):
        sorted_data[terrain][height] = []

    sorted_data[terrain][height].append(temp_data)
    

with open(f"{image_name}.json", "w") as outfile:
    json.dump(sorted_data, outfile)
