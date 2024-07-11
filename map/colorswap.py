# creates image from pixel version of map, wont work with real map
from PIL import Image
from collections import Counter

image_name = "DisplacementMap"

img = Image.open(f"data/{image_name}.png")
pixels = img.load() 

width, height = img.size

print(width)
print(height)

def f2(lst):
   return Counter(lst).most_common(1)

def nearest_colour( subjects, query ):
    return min( subjects, key = lambda subject: sum( (s - q) ** 2 for s, q in zip( subject, query ) ) )


create_colors = {
    "water": (0, 0, 0),
    "grass": (50, 50, 50),
    "sand1": (65, 65, 65),
    "sand2": (80, 80, 80),
    "forest": (144, 144, 144),
    "dirt1": (160, 160, 160),
    "dirt2": (200, 200, 200),
    "ice": (160, 160, 160),
    "b1": (65, 65, 65),
    "b2": (65, 65, 65),
    "b3": (65, 65, 65),
}


coloursUsed = []
incriement = 1

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
                rgb = pixels[x, y]
                if (x + incriement < width):
                    # for xx in range(x, x + incriement):
                    #     if (y + incriement < height):
                    #         for yy in range(y, y + incriement):
                    #             rgb = pixels[xx, yy]
                    #             closet_color = nearest_colour(commonColors, rgb)
                    #             hexCount.append(closet_color)

                    hexCount.append(hex) 
                    hexValue = f2(hexCount)
                    hexValue = [a[0] for a in hexValue]
                    hexColor = hexValue[0]
                    coloursUsed.append(hexColor)
                    
                    # if (hexColor == (196, 223, 255)): # water
                    #     img.putpixel((x, y), create_colors["water"])

                    # if (hexColor == (201, 229, 178)): # grass
                    #     img.putpixel((x, y), create_colors["grass"])
    
                    # if (hexColor == (255, 240, 189)): # sand
                    #     img.putpixel((x, y), create_colors["sand1"])
                    
                    # if (hexColor == (227, 183, 110)): # sand 2
                    #     img.putpixel((x, y), create_colors["sand2"])

                    # if (hexColor == (59, 131, 21)): #forest
                    #     img.putpixel((x, y), create_colors["forest"])
                    if (rgb == (132, 132, 132, 255)): #forest
                        
                        img.putpixel((x, y), (174, 174, 174, 255))
                    if (rgb == (121, 121, 121, 255)): #forest
                        img.putpixel((x, y), (150, 150, 150, 255))

                    # if (hexColor == (183, 133, 92)): #moutain
                    #     img.putpixel((x, y), create_colors["dirt2"])

                    # if (hexColor == (203, 167, 139)): #low moutain
                    #     img.putpixel((x, y), create_colors["dirt1"])

                    # if (hexColor == (255, 255, 255)): #ice
                    #     img.putpixel((x, y), create_colors["ice"])

                    # if (hexColor == (184, 61, 186)): #town
                    #     img.putpixel((x, y), create_colors["b1"])

                    # if (hexColor == (236, 28, 36)): #city
                    #     img.putpixel((x, y), create_colors["b2"])

                    # if (hexColor == (255, 255, 0)): #capital city
                    #     img.putpixel((x, y), create_colors["b3"])
                                 
                             

# im = img.save("test.png", "PNG")                   
# print(Counter(coloursUsed))
# print(len(Counter(coloursUsed)))

# with open("sample.json", "w") as outfile:
#     json.dump(map, outfile)


