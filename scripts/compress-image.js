const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// Create necessary directories if they don't exist
const imagesDir = path.join(__dirname, "../public/images");
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

const inputImage =
    "/Users/karan/repos/1mwapp/public/assets/img/geospatial/xfleety.png";
const outputImage = path.join(
    path.dirname(inputImage),
    "xfleety-compressed.jpg"
);

async function compressImage() {
    try {
        await sharp(inputImage)
            .jpeg({
                quality: 80, // High quality while maintaining good compression
                mozjpeg: true, // Use mozjpeg for better compression
                chromaSubsampling: "4:4:4", // Maintain color quality
                optimizeCoding: true, // Optimize Huffman coding tables
                progressive: true, // Progressive JPEG for better perceived loading
                optimizeScans: true, // Optimize multi-scan JPEG
                quantisationTable: 3, // Use a balanced quantization table
            })
            .toFile(outputImage);

        // Get file sizes for comparison
        const inputStats = fs.statSync(inputImage);
        const outputStats = fs.statSync(outputImage);
        const compressionRatio = (
            ((inputStats.size - outputStats.size) / inputStats.size) *
            100
        ).toFixed(2);

        console.log("Image compressed successfully!");
        console.log(`Original size: ${(inputStats.size / 1024).toFixed(2)} KB`);
        console.log(
            `Compressed size: ${(outputStats.size / 1024).toFixed(2)} KB`
        );
        console.log(`Compression ratio: ${compressionRatio}%`);
    } catch (error) {
        console.error("Error compressing image:", error);
    }
}

compressImage();
