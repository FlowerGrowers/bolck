const fs = require('fs');

const verb = process.argv[2];
const event = process.argv[3];
const event2 = process.argv[4];


// 先判断是什么动作

switch (verb) {
    case 'add':
        // 判断是否是有存在db文件 没有创建 有就添加时间
        fs.stat('F:\\Node.js-Introduction\\db', function (err, stats) {
            if (err === null) {
                const fileContent = fs.readFileSync('F:\\Node.js-Introduction\\db').toString();
                const list = JSON.parse(fileContent);

                list.push([event, false]);
                fs.writeFileSync('F:\\Node.js-Introduction\\db', JSON.stringify(list));
            } else {
                fs.writeFileSync('F:\\Node.js-Introduction\\db', '');
                const list = [];

                list.push([event, false]);
                fs.writeFileSync('F:\\Node.js-Introduction\\db', JSON.stringify(list));
            }
        });

        break;
    case 'done':

        break;
    case 'edit':

        break;
    case 'delete':

        break;

    default:
        console.log('无效操作，请输入正确的命令');

        break;
}


// 先常见一个新的数据库
// const list = [];


// // 写数据库中的数据

// fs.writeFileSync('F:\\Node.js-Introduction\\db', JSON.stringify(list));


// // 读数据库中的数据

// fs.readFileSync('F:\\Node.js-Introduction\\db').toString();