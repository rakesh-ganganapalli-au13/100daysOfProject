const calculate = ()=>{

    //for characters
    const input = document.getElementById('input').value;
    const characters = input.replace(/\s/g,'');
    const charCount = characters.length? characters.length :0
    const output1 = document.getElementById('output1').innerHTML ='Number of charectors = ' + charCount
    // console.log(characters)

    // for words
    const input2 = document.getElementById('input').value;
    const words = input2.match(/\w+/g,'')? input2.match(/\w+/g,''):[];
    const wordCount = words.length? words.length:0;
    const output2 = document.getElementById('output2').innerHTML ='Number of words = ' + wordCount
    // console.log(wordCount)
}