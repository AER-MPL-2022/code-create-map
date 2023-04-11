// 📂 Import required modules
const fs = require('fs');
const path = require('path');

// 📚 Function to load a JSON file from a given file path
const loadJsonFile = (filePath) => {
  return new Promise((resolve, reject) => {
    // 📖 Read the file and parse its content as JSON
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
};

// 📝 Function to write data to a text file
const writeTxtFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    // ✍️ Write the data to the file
    fs.writeFile(fileName, data, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

// 🎨 Function to format layer data as a string
const formatLayerData = (data, width) => {
  let formattedData = '';
  for (let i = 0; i < data.length; i++) {
    formattedData += data[i];
    // 🚩 Add a line break after each row
    if ((i + 1) % width === 0) {
      formattedData += '\n';
    } else {
        // 🚩 Add a comma after each column
        formattedData += ',';
    }
  }
  return formattedData;
};

// 🏗️ Function to create text files from JSON layers
const createTxtFilesFromJsonLayers = async (jsonPath) => {
  try {
    // 📥 Load the JSON data
    const jsonData = await loadJsonFile(jsonPath);
    const layers = jsonData.layers;
    const writePromises = [];

    // 🔄 Iterate through the layers
    for (const layer of layers) {
      // 💅 Format the layer data
      const layerData = formatLayerData(layer.data, layer.width);
      // 📛 Create the output file name
      const layerName = layer.name.replace(/\s+/g, '_');
      const outputFileName = `${layerName}.txt`;

      // 📤 Write the data to the text file
      writePromises.push(
        writeTxtFile(outputFileName, layerData).then(() => {
          console.log(`Fichier créé: ${outputFileName}`);
        })
      );
    }

    // ⏳ Wait for all write operations to finish
    await Promise.all(writePromises);
  } catch (err) {
    console.error(`Erreur: ${err.message}`);
  }
};

// 🎯 Specify the JSON file path
const jsonFilePath = path.join("./", 'MyMap.json');
// 🚀 Run the function
createTxtFilesFromJsonLayers(jsonFilePath);
