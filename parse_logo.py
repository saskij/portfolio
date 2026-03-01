import cv2
import numpy as np

img = cv2.imread('/Users/asha/.gemini/antigravity/brain/062c9dc0-4595-432c-9768-118b4c2580d1/media__1772348766827.png')
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# The image is a blueprint with a dark "A S" monogram.
# Let's threshold it to find the dark pixels (the logo itself).
_, thresh = cv2.threshold(gray, 200, 255, cv2.THRESH_BINARY_INV)

# Find contours
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Keep the largest contours (the logo parts)
contours = sorted(contours, key=cv2.contourArea, reverse=True)[:5]

for i, c in enumerate(contours):
    area = cv2.contourArea(c)
    if area > 100:
        # Approximate the contour to a polygon
        epsilon = 0.01 * cv2.arcLength(c, True)
        approx = cv2.approxPolyDP(c, epsilon, True)
        print(f"Shape {i+1} Area: {area}")
        for pt in approx:
            print(f"  {pt[0][0]}, {pt[0][1]}")

