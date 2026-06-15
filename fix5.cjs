const fs = require('fs');

let code = fs.readFileSync('src/components/ChatWindow.tsx', 'utf8');

// I will just blindly fix all syntax errors I can find using Regex.

// 1. Array entries ending with a backtick but no opening backtick:
// Example: '需提供理赔操作指南`
code = code.replace(/'需提供理赔操作指南`/g, "'需提供理赔操作指南'");
code = code.replace(/'关注理赔流程便捷性`/g, "'关注理赔流程便捷性'");
code = code.replace(/'认可健康保障计划覆盖范围`/g, "'认可健康保障计划覆盖范围'");

// Wait, the strings were:
// 'HRD-刘总', '客户经理-黄志峰', '产品经理-肖姣'
// Let's replace any `'...` ` where the start is a single quote and the end is a backtick:
code = code.replace(/'([^'\n]+)`/g, (match, inner) => {
    return `'${inner}'`;
});

// Same for opening backtick ending in single quote:
code = code.replace(/`([^`\n]+)'/g, (match, inner) => {
    return `'${inner}'`;
});

fs.writeFileSync('src/components/ChatWindow.tsx', code);
console.log('Fixed mismatched quotes');
