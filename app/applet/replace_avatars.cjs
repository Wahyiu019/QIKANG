const fs = require('fs');
const path = require('path');

const replacements = [
  {
    old: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
    new: "https://api.dicebear.com/9.x/micah/svg?seed=Insight&backgroundColor=0ea5e9"
  },
  {
    old: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
    new: "https://api.dicebear.com/9.x/micah/svg?seed=Marketing&backgroundColor=f97316"
  },
  {
    old: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    new: "https://api.dicebear.com/9.x/micah/svg?seed=Bidding&backgroundColor=8b5cf6"
  },
  {
    old: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=100&q=80",
    new: "https://api.dicebear.com/9.x/micah/svg?seed=Compliance&backgroundColor=10b981"
  },
  {
    old: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    new: "https://api.dicebear.com/9.x/micah/svg?seed=Tracker&backgroundColor=f43f5e"
  },
  {
    old: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=100&q=80",
    new: "https://api.dicebear.com/9.x/micah/svg?seed=Operation&backgroundColor=64748b"
  }
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  replacements.forEach(r => {
    if (content.includes(r.old)) {
      content = content.replace(new RegExp(r.old.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'g'), r.new);
      changed = true;
    }
  });
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
