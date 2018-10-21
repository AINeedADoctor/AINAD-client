var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input } from '@angular/core';
var BackgroundImage = /** @class */ (function () {
    function BackgroundImage(el) {
        this.el = el.nativeElement;
    }
    BackgroundImage.prototype.ngAfterViewInit = function () {
        this.el.style.backgroundImage = 'url(' + this.backgroundImage + ')';
    };
    __decorate([
        Input('background-image'),
        __metadata("design:type", String)
    ], BackgroundImage.prototype, "backgroundImage", void 0);
    BackgroundImage = __decorate([
        Directive({
            selector: '[background-image]'
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], BackgroundImage);
    return BackgroundImage;
}());
export { BackgroundImage };
//# sourceMappingURL=background-image.js.map