# printPdf
Used for printing PDF documents on browsers. Print according to PDF url. Compatible with most browsers except chrome and IE
# Usage
> if don't use npm,please read source code and copy code as needed
```javasrcipt
npm install
```
# Demo
```html
<body>
    <button onclick="print()">打印</button>
    <script type="module">
        import printPdf from './printPdf';
        print = async() => {
            console.log('Printing...')
            const url = 'http://xxx/one.pdf';
            let printRes = await printPdf(url);
            console.log('Print Successfully')
        }
    </script>
</body>
```