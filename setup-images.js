const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\d711e1f0-10f5-479d-9469-01b22b3fcbcc';
const publicDir = path.join(__dirname, 'public', 'images');

// Create directories
['categories', 'products', 'banners'].forEach(dir => {
  fs.mkdirSync(path.join(publicDir, dir), { recursive: true });
});

// Using the images we successfully generated:
// hero_banner_1786709675707.jpg
// cat_saree_1786709688403.jpg
// cat_kurti_1786709708704.jpg
// cat_lehenga_1786709734004.jpg
// Since dupatta failed, we will just duplicate saree for dupatta for now so it works without crashing.

const mappings = {
  'hero_banner_1786709675707.jpg': 'banners/hero.jpg',
  'cat_saree_1786709688403.jpg': 'categories/sarees.png',
  'cat_kurti_1786709708704.jpg': 'categories/kurtis.png',
  'cat_lehenga_1786709734004.jpg': 'categories/lehengas.png',
  'cat_saree_1786709688403.jpg': 'categories/dupattas.png', // Fallback for dupatta
};

// Copy basic images
for (const [src, dest] of Object.entries(mappings)) {
  const sourcePath = path.join(srcDir, src);
  if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, path.join(publicDir, dest));
  } else {
      console.log("Missing image:", src);
  }
}

// Map category images to products for demo purposes
const productMap = {
  's': 'cat_saree_1786709688403.jpg',
  'k': 'cat_kurti_1786709708704.jpg',
  'l': 'cat_lehenga_1786709734004.jpg',
  'd': 'cat_saree_1786709688403.jpg'
};

const products = [
  's1','s2','s3',
  'k1','k2',
  'l1','l2',
  'd1','d2'
];

products.forEach(p => {
  const prefix = p[0];
  const src = productMap[prefix];
  
  const sourcePath = path.join(srcDir, src);
  if (fs.existsSync(sourcePath)) {
      // Create two variations of the same image for hover effects
      fs.copyFileSync(sourcePath, path.join(publicDir, `products/${p}-1.png`));
      fs.copyFileSync(sourcePath, path.join(publicDir, `products/${p}-2.png`));
  }
});

console.log("Images copied successfully.");
