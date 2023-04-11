# Create Your Map 🗺️
This project guides you through using Tiled, a flexible and powerful tile map editor. Tiled is an open-source software, easy to use, and suitable for creating maps for video games and other applications. It supports a wide range of map formats and offers features for managing layers, objects, and custom properties.

Download 📥
You can download Tiled from the following link:
[Donwload Here](https://thorbjorn.itch.io/tiled/download/eyJpZCI6Mjg3NjgsImV4cGlyZXMiOjE2ODEyNTA3NjJ9.POqFr1km6fsyawRy3eiqgxOU70k%3d)

# Installation 🔧
Follow these steps to install Tiled on your Linux system:

 - 1 Download the `.AppImage` file from the link above.

 - 2 Open a terminal and navigate to the folder where the downloaded file is located. For example:

 `cd ~/Downloads`

 - 3 Make the `.AppImage` file executable using the chmod command:
`chmod 777 Tiled-<version>.AppImage`

 - 4 Execute the `.AppImage` file to launch Tiled:
`./Tiled-<version>.AppImage`

# Usage 🎮
After installing and launching Tiled, you can start creating and editing tile maps for your projects. For more information on using Tiled, check out the official documentation: https://doc.mapeditor.org/en/stable/

# 🌟 Map Layer Converter 🌟
This script converts JSON map layers into individual text files, making it easier to view and edit each layer separately. The script reads the JSON file containing the map layers, formats the data, and outputs the formatted data into separate text files. It's perfect for game developers or anyone working with 2D map data! 🎮🗺️

# 🚀 Getting Started
To use or modify the script, follow these steps:

- 1️⃣ Install the required packages
This script requires Node.js to be installed on your machine. You can download Node.js from [here](https://nodejs.org/en).

- Once you have Node.js installed, navigate to the repository folder and run:

 - bash `npm install` This will install the required packages for the script to run.

- 2️⃣ Modify the script (optional)
Open the TiledMapToTxt.js file in your favorite code editor and modify the script as needed. Don't forget to save your changes! 💻🔧

- 3️⃣ Run the script
To run the script, navigate to the repository folder in your terminal or command prompt and run:

- bash `node TiledMapToTxt.js` The script will read the JSON file, process the layers, and create separate text files for each layer. 📄✨

# 🔧 How to Modify the Script
The script is designed to be easy to modify. Below are some areas you may want to change:

- JSON file path: To use a different JSON file, update the jsonFilePath variable with the path to your desired file.
- Layer formatting: If you want to change the way the layers are formatted, update the formatLayerData function with your desired formatting logic.
- Output file naming: To change the naming convention for the output files, modify the layerName variable in the createTxtFilesFromJsonLayers function.

Enjoy working with your map layers, and happy coding! 🎈🎉
