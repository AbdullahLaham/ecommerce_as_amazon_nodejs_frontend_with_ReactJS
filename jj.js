const fs = require('fs');
// const {Token} = require('./Token');
const keywords = ['PROGRAM', 'INTEGER', 'BOOLEAN', 'BEGIN', 'END', 'PROCEDURE', 'IF', 'THEN', 'ELSE', 'FOR',
 'TRUE', 'FALSE', 'DO', 'WRITE', 'MOD', 'DIV', 'READ', 'AND', 'OR', 'NOT', 'OF', 'ARRAY', '>=', '<=', 'VAR',
  '*', '<>', ':=', ';', ',', '..', '<', '>', '(', ')', '[', '/', '+', '-', '.', ']', '=', ':'];

const tokenTypes = {
  NUMBER: 1,
  OPERATOR: 0,
  KEYWORD: 0,
  IDENTIFIER: 2,
}


function lexer(input) {
  const tokens = [];
  let currentToken = null;
  let lineNumber = 1;

  const numberRegex = /[0-9]+/;
  const operatorRegex = /[+\-*;;;:=,<>().\/]/;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === '\n') {
      lineNumber++;
      currentToken = null;
    } else {
    }
    

    if (numberRegex.test(char)) {
      if (currentToken && currentToken.Type === tokenTypes.NUMBER) {
        currentToken.Name += char;
      } else {
        currentToken = {
          Type: tokenTypes.NUMBER,
          Name: char,
          Line: lineNumber,
        };
        tokens.push(currentToken);

      }

    } else if (char == ':' && input[i+1] == '=') {
      currentToken = {
        Type: tokenTypes.KEYWORD,
        Name: ':=',
        Line: lineNumber,
      };
      tokens.push(currentToken);
      i++;
    }
    else if (char == '>' && input[i+1] == '=') {
      currentToken = {
        Type: tokenTypes.KEYWORD,
        Name: '>=',
        Line: lineNumber,
      };
      tokens.push(currentToken);
      i++;
    }
    else if (char == '<' && input[i+1] == '=') {
      currentToken = {
        Type: tokenTypes.KEYWORD,
        Name: '<=',
        Line: lineNumber,
      };
      tokens.push(currentToken);
      i++;
    }
    else if (char == '<' && input[i+1] == '>') {
      currentToken = {
        Type: tokenTypes.KEYWORD,
        Name: '<>',
        Line: lineNumber,
      };
      tokens.push(currentToken);
      i++;
    }
    else if (char == '.' && input[i+1] == '.') {
      currentToken = {
        Type: tokenTypes.KEYWORD,
        Name: '..',
        Line: lineNumber,
      };
      tokens.push(currentToken);
      i++;
    }


     else if (operatorRegex.test(char)) {
      currentToken = {
        Type: tokenTypes.OPERATOR,
        Name: char,
        Line: lineNumber,
      };
      tokens.push(currentToken);
    } else if (char === ' ' || char === '\t') {
      // Ignore whitespace
      currentToken = null;
    } else {

      let tokenValue = char;
      let j = i + 1 ;
      let isOperator = false;
      if (char == '\n') {
        tokenValue = '';
        
      }


      for (j ; j < input.length; j++) {
        const nextChar = input[j];

        if (nextChar === ' ' || nextChar === '\n' || nextChar === '\t' || nextChar === '\r' || operatorRegex.test(nextChar)) {
          if (operatorRegex.test(nextChar)) {
            isOperator = true;
          }
          if (nextChar === '\n') {
            lineNumber++;
          }
          break;
          
        } else {
          tokenValue += nextChar;
        }
      }
      
      tokenValue = tokenValue.toUpperCase();
      if (keywords.includes(tokenValue)) {
        currentToken = {
          Type: tokenTypes.KEYWORD,
          Name: tokenValue,
          Line: lineNumber,
        };
        tokens.push(currentToken);
      } 
      else {

        if (tokenValue !== '\n' && tokenValue !== ' ' && tokenValue !== '\n' && tokenValue !== '\t' && tokenValue !== '\r') {
          currentToken = {
            Type: tokenTypes.IDENTIFIER,
            Name: tokenValue,
            Line: lineNumber,
          };
  
          tokens.push(currentToken);
        }
      }
      if (isOperator) {
        i += tokenValue.length - 1;
      } else {
        i += tokenValue.length;
      }
      
    }
  }

  return tokens;
}

fs.readFile('P.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const tokens = lexer(data);

  
// Syntax Analyzer function
function parse(tokens) {
  let index = 0;


  // the error function
  function error () {
    const token = tokens[index];

    if (token.Type == 0) {
       throw new Error(`there is a problem in ${token.Name} at the line ${token.Line} that it is not a keyword`);
       return
    
      }
    if (token.Type == 1) {
       throw new Error(`there is a problem in ${token.Name} at the line ${token.Line} that it is not a Number`);
       return
    
      }
    if (token.Type == 2) {
       throw new Error(`there is a problem in ${token.Name} at the line ${token.Line} that it is not a Identifier`);
       return
    
      }
  }


  function match(expectedType) {
    const token = tokens[index];
    
    if (token && token.Type == expectedType) {
      
      index++;
      return true;
    }
    return false;
  }


  function statement() {

      if (match(0)) {
        return true;
      }
      else if (match(1)) {
        return true;
      }
      else if (match(2)) {
        return true;
      }
      console.log('statement', false)
      error();
      return false;
    }

  for (let i = 0; i < tokens.length; i++) {
    statement();
  }
  

  if (index == tokens.length) {
    return true; // Parsing succeeded
  }

  return false; // Parsing failed
}

const isSyntaxValid = parse(tokens);

console.log(tokens);

// Print the result
console.log(isSyntaxValid ? 'Syntax is valid' : 'Syntax is invalid');
});









































// const grammar = {
//   // Define a program as a list of statements
//   program: [
//     { type: 'repeat' },
//     { type: 'statement', optional: true },
//     { type: 'endrepeat' }
//   ],
//   // Define a statement as a simple object with a type property
//   statement: [
//     { type: 'assignment' },
//     { type: 'conditional' },
//     { type: 'loop' }
//   ],
//   // Define an assignment statement
//   assignment: [
//     { type: 'variable' },
//     { type: 'equals' },
//     { type: 'value' }
//   ],
//   // Define a conditional statement
//   conditional: [
//     { type: 'if' },
//     { type: 'expression' },
//     { type: 'then' },
//     { type: 'statement', optional: true },
//     { type: 'else', optional: true },
//     { type: 'statement', optional: true }
//   ],
//   // Define a loop statement
//   loop: [
//     { type: 'while' },
//     { type: 'expression' },
//     { type: 'do' },
//     { type: 'statement', optional: true },
//     { type: 'endwhile' }
//   ],
//   // Define some basic tokens that the parser will recognize
//   tokens: {
//     'repeat': /^repeat\b/,
//     'endrepeat': /^endrepeat\b/,
//     'if': /^if\b/,
//     'then': /^then\b/,
//     'else': /^else\b/,
//     'while': /^while\b/,
//     'do': /^do\b/,
//     'variable': /^[a-zA-Z_]\w*/,
//     'equals': /^=/,
//     'value': /^(?:\d+|\d*\.\d+)/
//   }
// };

// // Define a simple tokenizer function that splits a string into tokens based on the grammar
// function tokenize(str) {
//   const tokens = [];
//   let pos = 0;
//   while (pos < str.length) {
//     let match = null;
//     for (let token in grammar.tokens) {
//       const regex = grammar.tokens[token];
//       match = regex.exec(str.slice(pos));
//       if (match) {
//         tokens.push({ type: token, value: match[0] });
//         pos += match[0].length;
//         break;
//       }
//     }
//     if (!match) {
//       throw new Error(`Unexpected token at position ${pos}`);
//     }
//   }
//   return tokens;
// }

// // Define a recursive descent parser function that uses the grammar to parse the tokens
// function parse(tokens) {
//   let pos = 0;

//   function program() {
//     const statements = [];
//     while (pos < tokens.length && !match('endrepeat')) {
//       statements.push(statement());
//     }
//     expect('endrepeat');
//     return { type: 'program', body: statements };
//   }

//   function statement() {
//     const lookahead = tokens[pos];
//     switch (lookahead.type) {
//       case 'variable':
//         return assignment();
//       case 'if':
//         return conditional();
//       case 'while':
//         return loop();
//       default:
//         throw new Error(`Unexpected token ${lookahead.value} at position ${pos}`);
//     }
//   }

//   function assignment() {
//     const variable = expect('variable').value;
//     expect('equals');
//     const value = expect('value').value;
//     return { type: '














// // Define the array of keywords
// const keywords = ['if', 'else', 'while', 'for', 'int', 'float', 'var'];

// // Lexical Analyzer function
// function analyze(input) {
//   // Remove whitespace and split the input into tokens
//   const tokens = input.trim().split(/\s+/);

//   // Initialize the results array
//   const results = [];

//   // Iterate over the tokens
//   for (let i = 0; i < tokens.length; i++) {
//     const token = tokens[i];

//     // Check if the token is a keyword
//     if (keywords.includes(token)) {
//       // Add the keyword to the results array
//       results.push({ token, type: 'keyword' });
//     } else {
//       // Add the token as an identifier
//       results.push({ token, type: 'identifier' });
//     }
//   }

//   return results;
// }

// // Syntax Analyzer function
// function parse(tokens) {
//   let index = 0;

//   function match(expectedType) {
//     const token = tokens[index];
//     if (token && token.type === expectedType) {
//       index++;
//       return true;
//     }
//     return false;
//   }


//   function statement() {
//     if (match('keyword')) {
//       if (match('identifier')) {
//         return true;
//       }
//     }

    
//     return false;
//   }

//   // Entry point of the syntax analyzer
//   if (statement()) {
//     if (index === tokens.length) {
//       return true; // Parsing succeeded
//     }
//   }

//   return false; // Parsing failed
// }

// // Example usage
// const input = 'if x';
// const analysisResult = analyze(input);
// const isSyntaxValid = parse(analysisResult);

// // Print the result
// console.log(isSyntaxValid ? 'Syntax is valid' : 'Syntax is invalid');