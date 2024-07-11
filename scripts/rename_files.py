import os
import re

# Directory path
directory = r'C:\Users\deand\OneDrive\Documents\GitHub\AmilDean.github.io\images'

# Function to rename files
def rename_files(directory):
    try:
        for filename in os.listdir(directory):
            try:
                # Split the filename into base and extension
                base, ext = os.path.splitext(filename)
                
                # Remove hyphens from the base filename
                new_base = base.replace('-', '')
                
                # Replace spaces and special characters with underscores in the base filename
                new_base = re.sub(r'[^\w\s]', '', new_base).strip().replace(' ', '_')
                
                # Convert base filename to lowercase
                new_base = new_base.lower()
                
                # Remove the dash at the end of the filename if it exists
                if new_base.endswith('-'):
                    new_base = new_base[:-1]
                
                # Combine the new base filename with the original extension
                new_filename = f"{new_base}{ext}"
                
                # Rename the file only if the new filename is different
                if new_filename != filename:
                    old_path = os.path.join(directory, filename)
                    new_path = os.path.join(directory, new_filename)
                    os.rename(old_path, new_path)
                    print(f'Renamed {filename} to {new_filename}')
            except Exception as e:
                print(f'Error renaming {filename}: {str(e)}')
    except Exception as e:
        print(f'Error listing directory {directory}: {str(e)}')

# Call the function to rename, remove hyphens, convert filenames to lowercase, and remove the dash
rename_files(directory)
