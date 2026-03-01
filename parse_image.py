from PIL import Image
import sys

# Load image
try:
    img = Image.open('/Users/asha/.gemini/antigravity/brain/062c9dc0-4595-432c-9768-118b4c2580d1/media__1772348766827.png')
    img.thumbnail((80, 80)) # Resize for ASCII
    
    # Convert pixels to ASCII
    chars = ["@", "#", "S", "%", "?", "*", "+", ";", ":", ",", "."]
    pixels = img.convert("L").getdata()
    ascii_str = ""
    for i, pixel in enumerate(pixels):
        ascii_str += chars[pixel // 25]
        if (i + 1) % img.width == 0:
            ascii_str += "\n"
    print(ascii_str)
except Exception as e:
    print(e)
