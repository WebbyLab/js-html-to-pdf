'use strict';

var Q = require('q');

class PDFExport {
    constructor( args ) {
        this.format = args.format || 'a4';
        this.pdfDocument = new jsPDF(this.format);
    }

    addPage() {
        this.pdfDocument.addPage(this.format);
    }

    createPageScreenshot(domNode) {
        var defer = Q.defer();

        this.pdfDocument.addHTML(domNode,() => defer.resolve());

        return defer.promise;
    }

    downloadDocument() {
        this.pdfDocument.save();
    }

    getRawDocument() {
        return this.pdfDocument.output();
    }
}

module.exports = PDFExport;