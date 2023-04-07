// ! ЗАДАЧА 1
const parser = new DOMParser();

const xmlString = `
    <list>
    <student>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    </list>
`
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector("list")

const studentNodes = listNode.querySelectorAll('student')
var nameArr = []
studentNodes.forEach((studentNode) => {
    const nameNode = studentNode.querySelector("name");
    const firstNameNode = studentNode.querySelector("first");
    const secondNameNode = studentNode.querySelector("second");
    const ageNode = studentNode.querySelector("age");
    const profNode = studentNode.querySelector("prof");

    const langAttr = nameNode.getAttribute('lang');

    const studName = `${firstNameNode.textContent} ${secondNameNode.textContent}`
    const result_1 = {
        name: studName,
        age: ageNode.textContent,
        prof: profNode.textContent,
        lang: langAttr,
    };
    nameArr.push(result_1)

})


let result01 = {
    list: nameArr
}
console.log(result01)


// ! ЗАДАЧА 2 

const jsonString = `
{
    "list": [
        {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
        },
        {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
        }
        ]
    }
`;

const data = JSON.parse(jsonString);

const result_2 = data
console.log('result_2', result_2)
