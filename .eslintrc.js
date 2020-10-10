module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    env: {
        node: true,
        browser: false,
    },
    rules: {
        // General
        "no-empty": "off", // disallow empty statements
        "use-isnan": "warn", // disallow comparisons with the value NaN
        "no-console": "off", // disallow use of console (off by default in the node environment)
        "valid-jsdoc": "off", // Ensure JSDoc comments are valid (off by default)
        "no-debugger": "warn", // disallow use of debugger
        "valid-typeof": "warn", // Ensure that the results of typeof are compared against a valid string
        "no-ex-assign": "warn", // disallow assigning to the exception in a catch block
        "no-obj-calls": "warn", // disallow the use of object properties of the global object (Math and JSON) as functions
        "no-dupe-keys": "error", // disallow duplicate keys when creating object literals
        "no-func-assign": "warn", // disallow overwriting functions written as function declarations
        "no-unreachable": "error", // disallow unreachable statements after a return, throw, continue, or break statement
        "no-regex-spaces": "warn", // disallow multiple spaces in a regular expression literal
        "no-reserved-keys": "off", // disallow reserved words being used as object literal keys (off by default)
        "no-cond-assign": "error", // disallow assignment in conditional expressions
        "no-const-assign": "error", // disallow assignment to const-declared variables
        "no-control-regex": "warn", // disallow control characters in regular expressions
        "no-sparse-arrays": "warn", // disallow sparse arrays
        "no-invalid-regexp": "warn", // disallow invalid regular expression strings in the RegExp constructor
        "no-negated-in-lhs": "warn", // disallow negation of the left operand of an in expression
        "no-constant-condition": "off", // disallow use of constant expressions in conditions
        "no-inner-declarations": "off", // disallow function or variable declarations in nested blocks
        "no-extra-boolean-cast": "warn", // disallow double-negation boolean casts in a boolean context
        "no-dupe-class-members": "error", // Disallow duplicate name in class members
        "comma-dangle": ["error", "always-multiline"], // allow or disallow trailing comma

        // Best Practices
        // These are rules designed to prevent you from making mistakes. They either prescribe a better way of doing something or help you avoid footguns.

        yoda: "warn", // require or disallow Yoda conditions
        curly: "off", // specify curly brace conventions for all control statements
        radix: "warn", // require use of the second argument for parseInt() (off by default)
        "no-new": "warn", // disallow use of new operator when not part of the assignment or comparison
        "no-void": "warn", // disallow use of void operator (off by default)
        complexity: "off", // specify the maximum cyclomatic complexity allowed in a program (off by default)
        "no-with": "warn", // disallow use of the with statement
        "no-alert": "warn", // disallow the use of alert, confirm, and prompt
        "no-eval": "error", // disallow use of eval()
        "no-octal": "warn", // disallow use of octal literals
        "no-proto": "warn", // disallow usage of __proto__ property
        "wrap-iife": "off", // require immediate function invocation to be wrapped in parentheses (off by default)
        "no-eq-null": "off", // disallow comparisons to null without a type-checking operator (off by default)
        "no-labels": "warn", // disallow use of labeled statements
        "no-caller": "warn", // disallow use of arguments.caller or arguments.callee
        "vars-on-top": "off", // requires to declare all vars on top of their containing scope (off by default)
        "no-loop-func": "off", // disallow creation of functions within loops
        "no-multi-str": "off", // disallow use of multiline strings
        "default-case": "off", // require default case in switch statements (off by default)
        "no-iterator": "warn", // disallow usage of __iterator__ property
        "guard-for-in": "off", // make sure for-in loops have an if statement (off by default)
        "no-redeclare": "off", // disallow declaring the same variable more then once
        "no-new-func": "error", // disallow use of new operator for Function object
        "no-sequences": "warn", // disallow use of comma operator
        "semi-spacing": "warn", // require a space after a semi-colon
        "no-div-regex": "warn", // disallow division operators explicitly at beginning of regular expression (off by default)
        "dot-notation": "warn", // encourages use of dot notation whenever possible
        "no-script-url": "warn", // disallow use of javascript: urls.
        "no-else-return": "off", // disallow else after a return in an if (off by default)
        "no-extra-bind": "warn", // disallow unnecessary function binding
        "no-fallthrough": "warn", // disallow fallthrough of case statements
        "no-lone-blocks": "warn", // disallow unnecessary nested blocks
        "no-octal-escape": "warn", // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \"error"5"warn"";
        "no-new-wrappers": "warn", // disallows creating new instances of String,Number, and Boolean
        "block-scoped-var": "off", // treat var statements as if they were block scoped (off by default)
        "no-self-compare": "warn", // disallow comparisons where both sides are exactly the same (off by default)
        "no-implied-eval": "warn", // disallow use of eval()-like methods
        "no-extend-native": "warn", // disallow adding to native types
        "no-return-assign": "warn", // disallow use of assignment in return statement
        "consistent-return": "off", // require return statements to either always or never specify values
        "no-useless-escape": "warn", // disallow escapes that don't have any effect in literals
        "no-native-reassign": "off", // disallow reassignments of native objects
        "no-warning-comments": "off", // disallow usage of configurable warning terms in comments": "warn",                        // e.g. TODO or FIXME (off by default)
        "no-floating-decimal": "warn", // disallow the use of leading or trailing decimal points in numeric literals (off by default)
        "no-unused-expressions": "off", // disallow usage of expressions in statement position
        eqeqeq: ["error", "allow-null"], // require the use of === and !==
        "no-unused-vars": ["warn", { ignoreRestSiblings: true }],

        // Variables
        // These rules have to do with variable declarations.

        "no-shadow": "warn", // disallow declaration of variables already declared in the outer scope
        "no-undef": "error", // disallow use of undeclared variables unless mentioned in a /*global */ block
        "no-undefined": "off", // disallow use of undefined variable (off by default)
        "no-label-var": "warn", // disallow labels that share a name with a variable
        "no-undef-init": "warn", // disallow use of undefined when initializing variables
        "no-delete-var": "warn", // disallow deletion of variables
        "no-catch-shadow": "warn", // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
        "no-use-before-define": "off", // disallow use of variables before they are defined
        "no-shadow-restricted-names": "warn", // disallow shadowing of names such as arguments

        // Node.js
        // These rules are specific to JavaScript running on Node.js.

        "no-sync": "off", // disallow use of synchronous methods (off by default)
        "no-new-require": "warn", // disallow use of new operator with the require function (off by default) (on by default in the node environment)
        "no-path-concat": "warn", // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
        "no-process-exit": "off", // disallow process.exit() (on by default in the node environment)
        "no-mixed-requires": "warn", // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
        "handle-callback-err": "warn", // enforces error handling in callbacks (off by default) (on by default in the node environment)
        "no-restricted-modules": "warn", // restrict usage of specified node modules (off by default)

        // Stylistic Issues
        // These rules are purely matters of style and are quite subjective.

        semi: "warn", // require or disallow use of semicolons instead of ASI
        "new-cap": "off", // require a capital letter for constructors
        "one-var": "off", // allow just one var statement per function (off by default)
        camelcase: "off", // require camel case names
        "sort-vars": "off", // sort variables within the same declaration block (off by default)
        "eol-last": "warn", // enforce newline at the end of file, with no multiple empty lines
        "wrap-regex": "off", // require regex literals to be wrapped in parentheses (off by default)
        "func-names": "off", // require function expressions to have a name (off by default)
        "func-style": "off", // enforces use of function declarations or expressions (off by default)
        "no-ternary": "off", // disallow the use of ternary operators (off by default)
        "quote-props": "off", // require quotes around object literal property names (off by default)
        "new-parens": "warn", // disallow the omission of parentheses when invoking a constructor with no arguments
        "brace-style": "off", // enforce one true brace style (off by default)
        "key-spacing": "off",
        "no-lonely-if": "off", // disallow if as the only statement in an else block (off by default)
        "comma-spacing": "off",
        "no-new-object": "warn", // disallow use of the Object constructor
        "no-spaced-func": "warn", // disallow space between function identifier and application
        "space-in-parens": "off", // require or disallow spaces inside parentheses (off by default)
        "no-multi-spaces": "off",
        "space-infix-ops": "warn", // require spaces around operators
        "consistent-this": "warn", // enforces consistent naming when capturing the current execution context (off by default)
        "keyword-spacing": "warn", // enforce spacing before and after keywords
        "space-in-brackets": "off", // require or disallow spaces inside brackets (off by default)
        "no-nested-ternary": "off", // disallow nested ternary expressions (off by default)
        "no-trailing-spaces": "warn", // disallow trailing whitespace at the end of lines
        "no-underscore-dangle": "off", // disallow dangling underscores in identifiers
        "max-nested-callbacks": "off", // specify the maximum depth callbacks can be nested (off by default)
        "no-array-constructor": "warn", // disallow use of the Array constructor
        "no-mixed-spaces-and-tabs": "warn", // disallow mixed spaces and tabs for indentation
        "no-empty-character-class": "warn", // disallow the use of empty character classes in regular expressions
        "jsx-quotes": ["warn", "prefer-double"], // enforces the usage of double quotes for all JSX attribute values which doesn’t contain a double quote
        "space-unary-ops": ["warn", { words: true, nonwords: false }], // require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    },
};
