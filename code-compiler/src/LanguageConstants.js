export const LANGUAGE_VERSION = {
    javascript : '18.15.0',
    typescript : '5.0.3',
    python: '3.10.0',
    java : '15.0.2',
    csharp: '6.12.0',
    php : '8.2.3'
}

export const LANGUAGE_CODE_SNIPPETS = {
    javascript: `console.log("Hello, world!");`,
    typescript: `console.log("Hello, world!");`,
    python: `print("Hello, world!")`,
    java: `public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!");

        }
    }`,
    csharp: `using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");   

        }
    }
}`,
    php: `<?php
echo "Hello, World!";
?>`
};