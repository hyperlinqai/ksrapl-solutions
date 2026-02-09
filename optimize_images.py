import os
from PIL import Image
import sys

def optimize_images(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                file_path = os.path.join(root, file)
                file_name, file_ext = os.path.splitext(file_path)
                
                # Skip if webp already exists (optional, but good for idempotency)
                webp_path = f"{file_name}.webp"
                if os.path.exists(webp_path):
                    print(f"Skipping {file}, webp already exists")
                    continue
                
                try:
                    with Image.open(file_path) as img:
                        # Convert to RGB if necessary (e.g. for PNGs with transparency)
                        # For WebP, RGBA is supported, so we can keep it for PNGs
                        # But if it's CMYK or something else, might need conversion
                        if img.mode in ('CMYK', 'P'):
                            img = img.convert('RGB')
                        
                        # Save as WebP
                        img.save(webp_path, 'WEBP', quality=80)
                        
                        original_size = os.path.getsize(file_path)
                        new_size = os.path.getsize(webp_path)
                        savings = (original_size - new_size) / original_size * 100
                        
                        print(f"Optimized: {file} -> {os.path.basename(webp_path)} ({savings:.1f}% saved)")
                except Exception as e:
                    print(f"Error converting {file}: {e}")

if __name__ == "__main__":
    optimize_images("public")
