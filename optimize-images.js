const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

const directories = [
    "public/assets/img/hero",
    "public/assets/img/products",
    "public/assets/img/geospatial",
    "public/assets/img/ai",
];

const optimizeImage = async (inputPath) => {
    const optimizedPath = inputPath.replace(".jpg", "-optimized.jpg");
    const stats = await fs.stat(inputPath);
    const fileSizeInMB = stats.size / (1024 * 1024);

    try {
        // Determine target dimensions based on image type
        let width = 1920;
        let height = 1080;

        if (inputPath.includes("main-hero")) {
            width = 2880; // Higher resolution for the main hero
            height = 1620;
        } else if (inputPath.includes("hero-background")) {
            width = 2400;
            height = 1600;
        } else if (inputPath.includes("cta-background")) {
            width = 1920;
            height = 1280;
        }

        console.log(
            `Processing ${path.basename(inputPath)} (${fileSizeInMB.toFixed(
                2
            )}MB)...`
        );

        await sharp(inputPath)
            .resize(width, height, {
                fit: "cover",
                withoutEnlargement: true,
                position: inputPath.includes("main-hero")
                    ? "center"
                    : "attention", // Use attention for product images
            })
            .jpeg({
                quality: inputPath.includes("main-hero") ? 90 : 80, // Higher quality for hero
                progressive: true,
                mozjpeg: true,
                chromaSubsampling: "4:4:4",
            })
            .toFile(optimizedPath);

        // Get optimized file size
        const optimizedStats = await fs.stat(optimizedPath);
        const optimizedSizeInMB = optimizedStats.size / (1024 * 1024);

        // Replace original with optimized
        await fs.unlink(inputPath);
        await fs.rename(optimizedPath, inputPath);

        console.log(`✅ Optimized: ${path.basename(inputPath)}`);
        console.log(
            `   Size reduced: ${fileSizeInMB.toFixed(
                2
            )}MB → ${optimizedSizeInMB.toFixed(2)}MB\n`
        );
    } catch (error) {
        console.error(
            `❌ Error optimizing ${path.basename(inputPath)}:`,
            error.message
        );
        // Try to clean up the optimized file if it exists
        try {
            await fs.access(optimizedPath);
            await fs.unlink(optimizedPath);
        } catch (e) {
            // Ignore cleanup errors
        }
    }
};

const processDirectory = async (directory) => {
    try {
        const files = await fs.readdir(directory);
        const jpgFiles = files.filter((file) => file.endsWith(".jpg"));

        console.log(`\nProcessing directory: ${directory}`);
        console.log("Found", jpgFiles.length, "images to optimize\n");

        for (const file of jpgFiles) {
            await optimizeImage(path.join(directory, file));
        }
    } catch (error) {
        console.error(
            `Error processing directory ${directory}:`,
            error.message
        );
    }
};

const main = async () => {
    console.log("🎨 Starting image optimization...\n");

    for (const directory of directories) {
        await processDirectory(directory);
    }

    console.log("\n✨ Image optimization complete!");
};

main().catch(console.error);
