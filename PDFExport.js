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

        var self = this;

        $(domNode).find('svg').each( function() {
            self._convertSVGtoCanvas(this);
        });

        this.pdfDocument.addHTML(domNode,() => defer.resolve());

        return defer.promise;
    }

    _convertSVGtoCanvas(element) {
        var $svg = $(element);
        var svg  = $svg.parent().html();

        var height = $svg.height();
        var width = $svg.width();

        var $canvas = $('<canvas>');

        var canvas  = $canvas.attr({
            height: height,
            width:  width
        })[0];

        var context = canvas.getContext('2d');

        context.drawSvg(svg,0,0,width,height);

        $svg.hide();

        $(element).parent().append($canvas);
    }

    downloadDocument() {
        this.pdfDocument.save();
    }

    getRawDocument() {
        return this.pdfDocument.output();
    }
}

module.exports = PDFExport;