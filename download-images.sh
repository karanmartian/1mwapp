#!/bin/bash

# Create directories if they don't exist
mkdir -p public/assets/img/{products,geospatial,ai,hero}

# Hero section
curl -o "public/assets/img/hero/main-hero.jpg" "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg"

# Products directory
curl -o "public/assets/img/products/industrial-drone.jpg" "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
curl -o "public/assets/img/products/fleet-management.jpg" "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
curl -o "public/assets/img/products/change-detection.jpg" "https://images.pexels.com/photos/7054528/pexels-photo-7054528.jpeg"
curl -o "public/assets/img/products/ai-platform.jpg" "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
curl -o "public/assets/img/products/cta-background.jpg" "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"

# Geospatial directory
curl -o "public/assets/img/geospatial/hero-background.jpg" "https://images.pexels.com/photos/417192/pexels-photo-417192.jpeg"
curl -o "public/assets/img/geospatial/airdiff.jpg" "https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg"
curl -o "public/assets/img/geospatial/xfleety.jpg" "https://images.pexels.com/photos/10553205/pexels-photo-10553205.jpeg"
curl -o "public/assets/img/geospatial/cta-background.jpg" "https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg"

# AI directory
curl -o "public/assets/img/ai/hero-background.jpg" "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg"
curl -o "public/assets/img/ai/backduck.jpg" "https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg"
curl -o "public/assets/img/ai/cloud-intelligence.jpg" "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
curl -o "public/assets/img/ai/cta-background.jpg" "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg" 