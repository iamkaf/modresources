import struct
import zlib
import os

def create_png_with_text(width, height, bg_color, text, filename):
    """
    Create a PNG image with background color and centered text
    
    Args:
        width, height: Image dimensions
        bg_color: Tuple of (r, g, b) values
        text: Character to display in center
        filename: Output filename
    """
    
    # Create image data (RGBA format)
    image_data = []
    
    # Simple bitmap font for displaying a single character
    # This is a basic 8x8 font for uppercase letters
    font_data = {
        'A': [
            0b00111000,
            0b01000100,
            0b10000010,
            0b10000010,
            0b11111110,
            0b10000010,
            0b10000010,
            0b00000000
        ],
        'B': [
            0b11111100,
            0b10000010,
            0b10000010,
            0b11111100,
            0b10000010,
            0b10000010,
            0b11111100,
            0b00000000
        ],
        'C': [
            0b01111110,
            0b10000000,
            0b10000000,
            0b10000000,
            0b10000000,
            0b10000000,
            0b01111110,
            0b00000000
        ],
        'D': [
            0b11111100,
            0b10000010,
            0b10000010,
            0b10000010,
            0b10000010,
            0b10000010,
            0b11111100,
            0b00000000
        ],
        'E': [
            0b11111110,
            0b10000000,
            0b10000000,
            0b11111100,
            0b10000000,
            0b10000000,
            0b11111110,
            0b00000000
        ],
        'F': [
            0b11111110,
            0b10000000,
            0b10000000,
            0b11111100,
            0b10000000,
            0b10000000,
            0b10000000,
            0b00000000
        ],
        'G': [
            0b01111110,
            0b10000000,
            0b10000000,
            0b10001110,
            0b10000010,
            0b10000010,
            0b01111110,
            0b00000000
        ],
        'H': [
            0b10000010,
            0b10000010,
            0b10000010,
            0b11111110,
            0b10000010,
            0b10000010,
            0b10000010,
            0b00000000
        ],
        'I': [
            0b01111100,
            0b00010000,
            0b00010000,
            0b00010000,
            0b00010000,
            0b00010000,
            0b01111100,
            0b00000000
        ],
        'J': [
            0b00111110,
            0b00000010,
            0b00000010,
            0b00000010,
            0b10000010,
            0b10000010,
            0b01111100,
            0b00000000
        ],
        'K': [
            0b10000010,
            0b10000100,
            0b10001000,
            0b10110000,
            0b11001000,
            0b10000100,
            0b10000010,
            0b00000000
        ],
        'L': [
            0b10000000,
            0b10000000,
            0b10000000,
            0b10000000,
            0b10000000,
            0b10000000,
            0b11111110,
            0b00000000
        ],
        'M': [
            0b10000010,
            0b11000110,
            0b10101010,
            0b10010010,
            0b10000010,
            0b10000010,
            0b10000010,
            0b00000000
        ],
        'N': [
            0b10000010,
            0b11000010,
            0b10100010,
            0b10010010,
            0b10001010,
            0b10000110,
            0b10000010,
            0b00000000
        ],
        'O': [
            0b01111100,
            0b10000010,
            0b10000010,
            0b10000010,
            0b10000010,
            0b10000010,
            0b01111100,
            0b00000000
        ],
        'P': [
            0b11111100,
            0b10000010,
            0b10000010,
            0b11111100,
            0b10000000,
            0b10000000,
            0b10000000,
            0b00000000
        ],
        'Q': [
            0b01111100,
            0b10000010,
            0b10000010,
            0b10000010,
            0b10001010,
            0b10000100,
            0b01111010,
            0b00000000
        ],
        'R': [
            0b11111100,
            0b10000010,
            0b10000010,
            0b11111100,
            0b10001000,
            0b10000100,
            0b10000010,
            0b00000000
        ],
        'S': [
            0b01111100,
            0b10000010,
            0b10000000,
            0b01111100,
            0b00000010,
            0b10000010,
            0b01111100,
            0b00000000
        ],
        'T': [
            0b11111110,
            0b00010000,
            0b00010000,
            0b00010000,
            0b00010000,
            0b00010000,
            0b00010000,
            0b00000000
        ],
        'U': [
            0b10000010,
            0b10000010,
            0b10000010,
            0b10000010,
            0b10000010,
            0b10000010,
            0b01111100,
            0b00000000
        ],
        'V': [
            0b10000010,
            0b10000010,
            0b10000010,
            0b01000100,
            0b01000100,
            0b00101000,
            0b00010000,
            0b00000000
        ],
        'W': [
            0b10000010,
            0b10000010,
            0b10000010,
            0b10010010,
            0b10101010,
            0b11000110,
            0b10000010,
            0b00000000
        ],
        'X': [
            0b10000010,
            0b01000100,
            0b00101000,
            0b00010000,
            0b00101000,
            0b01000100,
            0b10000010,
            0b00000000
        ],
        'Y': [
            0b10000010,
            0b01000100,
            0b00101000,
            0b00010000,
            0b00010000,
            0b00010000,
            0b00010000,
            0b00000000
        ],
        'Z': [
            0b11111110,
            0b00000010,
            0b00000100,
            0b00001000,
            0b00010000,
            0b00100000,
            0b11111110,
            0b00000000
        ]
    }
    
    # Scale factor for the font (to make it larger)
    scale = 32  # 8x8 font scaled to 256x256
    
    # Calculate character position (centered)
    char_x = (width - 8 * scale) // 2
    char_y = (height - 8 * scale) // 2
    
    # Generate pixel data
    for y in range(height):
        row = []
        for x in range(width):
            # Check if we're in the character area
            if (char_x <= x < char_x + 8 * scale and 
                char_y <= y < char_y + 8 * scale and 
                text.upper() in font_data):
                
                # Calculate position in the character bitmap
                char_pixel_x = (x - char_x) // scale
                char_pixel_y = (y - char_y) // scale
                
                # Get the character pattern
                pattern = font_data[text.upper()][char_pixel_y]
                
                # Check if this pixel should be lit
                if pattern & (1 << (7 - char_pixel_x)):
                    # White pixel for character
                    row.extend([255, 255, 255, 255])  # RGBA
                else:
                    # Background color
                    row.extend([bg_color[0], bg_color[1], bg_color[2], 255])
            else:
                # Background color
                row.extend([bg_color[0], bg_color[1], bg_color[2], 255])
        
        image_data.extend(row)
    
    # Convert to bytes
    raw_data = bytes(image_data)
    
    def write_png_chunk(chunk_type, data):
        chunk_data = chunk_type + data
        crc = zlib.crc32(chunk_data) & 0xffffffff
        return struct.pack('>I', len(data)) + chunk_data + struct.pack('>I', crc)
    
    # PNG signature
    png_signature = b'\x89PNG\r\n\x1a\n'
    
    # IHDR chunk
    ihdr_data = struct.pack('>IIBBBBB', width, height, 8, 6, 0, 0, 0)
    ihdr_chunk = write_png_chunk(b'IHDR', ihdr_data)
    
    # IDAT chunk
    compressor = zlib.compressobj()
    png_data = b''
    for y in range(height):
        png_data += b'\x00'  # Filter type 0 (None)
        start = y * width * 4
        end = start + width * 4
        png_data += raw_data[start:end]
    
    compressed_data = compressor.compress(png_data)
    compressed_data += compressor.flush()
    idat_chunk = write_png_chunk(b'IDAT', compressed_data)
    
    # IEND chunk
    iend_chunk = write_png_chunk(b'IEND', b'')
    
    # Write PNG file
    with open(filename, 'wb') as f:
        f.write(png_signature)
        f.write(ihdr_chunk)
        f.write(idat_chunk)
        f.write(iend_chunk)

def main():
    # Get mod name from user
    mod_name = input("Enter the mod name: ").strip()
    
    if not mod_name:
        print("Error: Mod name cannot be empty")
        return
    
    # Extract first character
    first_char = mod_name[0].upper()
    
    # Background color #4287f5 (RGB)
    bg_color = (66, 135, 245)
    
    # Output filename
    filename = f"{mod_name.lower().replace(' ', '_')}_icon.png"
    
    print(f"Generating PNG with character '{first_char}'...")
    
    # Create the PNG
    create_png_with_text(512, 512, bg_color, first_char, filename)
    
    print(f"PNG created successfully: {filename}")

if __name__ == "__main__":
    main()