(()=>{"use strict";class e{constructor(){}get totalScore(){return n.getInstance().activeElementsScore.reduce(((e,t)=>e+t),0)}render(){document.querySelector(".score__number").textContent=String(this.totalScore)}static getInstance(){return e.instance||(e.instance=new e),e.instance}}class t{constructor(e){this.element=e,e.addEventListener("click",this.clickEventHandler.bind(this))}clickEventHandler(){this.element.classList.toggle("food--active"),e.getInstance().render()}}class n{constructor(){this.elements=document.querySelectorAll(".food"),this._activeElements=[],this._activeElementsScore=[],this.elements.forEach((e=>{new t(e)}))}get activeElements(){return this._activeElements=[],this.elements.forEach((e=>{e.classList.contains("food--active")&&this._activeElements.push(e)})),console.log(this._activeElements),this._activeElements}get activeElementsScore(){return this._activeElementsScore=[],this.activeElements.forEach((e=>{const t=e.querySelector(".food__score");t&&this._activeElementsScore.push(Number(t.textContent))})),this._activeElementsScore}static getInstance(){return n.instance||(n.instance=new n),n.instance}}n.getInstance()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYWlseS1mb29kLXNjb3JlLy4vc3JjL2FwcC9zY29yZS50cyIsIndlYnBhY2s6Ly9kYWlseS1mb29kLXNjb3JlLy4vc3JjL2FwcC9mb29kLnRzIiwid2VicGFjazovL2RhaWx5LWZvb2Qtc2NvcmUvLi9zcmMvYXBwL2Zvb2RzLnRzIiwid2VicGFjazovL2RhaWx5LWZvb2Qtc2NvcmUvLi9zcmMvYXBwL21haW4udHMiXSwibmFtZXMiOlsiU2NvcmUiLCJGb29kcyIsImdldEluc3RhbmNlIiwiYWN0aXZlRWxlbWVudHNTY29yZSIsInJlZHVjZSIsInRvdGFsIiwic2NvcmUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsIlN0cmluZyIsInRoaXMiLCJ0b3RhbFNjb3JlIiwiaW5zdGFuY2UiLCJGb29kIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja0V2ZW50SGFuZGxlciIsImJpbmQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW5kZXIiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfYWN0aXZlRWxlbWVudHMiLCJfYWN0aXZlRWxlbWVudHNTY29yZSIsImZvckVhY2giLCJjb250YWlucyIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiYWN0aXZlRWxlbWVudHMiLCJmb29kU2NvcmUiLCJOdW1iZXIiXSwibWFwcGluZ3MiOiJtQkFDTyxNQUFNQSxFQUNULGVBQ0EsaUJBRUksT0FEY0MsRUFBTUMsY0FDUEMsb0JBQW9CQyxRQUFPLENBQUNDLEVBQU9DLElBQVVELEVBQVFDLEdBQU8sR0FFN0UsU0FDSUMsU0FBU0MsY0FBYyxrQkFBa0JDLFlBQWNDLE9BQU9DLEtBQUtDLFlBRXZFLHFCQUlJLE9BSEtaLEVBQU1hLFdBQ1BiLEVBQU1hLFNBQVcsSUFBSWIsR0FFbEJBLEVBQU1hLFVDYmQsTUFBTUMsRUFDVCxZQUFZQyxHQUNSSixLQUFLSSxRQUFVQSxFQUNmQSxFQUFRQyxpQkFBaUIsUUFBU0wsS0FBS00sa0JBQWtCQyxLQUFLUCxPQUVsRSxvQkFFSUEsS0FBS0ksUUFBUUksVUFBVUMsT0FBTyxnQkFDaEJwQixFQUFNRSxjQUNkbUIsVUNUUCxNQUFNcEIsRUFDVCxjQUNJVSxLQUFLVyxTQUFXZixTQUFTZ0IsaUJBQWlCLFNBQzFDWixLQUFLYSxnQkFBa0IsR0FDdkJiLEtBQUtjLHFCQUF1QixHQUM1QmQsS0FBS1csU0FBU0ksU0FBUVgsSUFDbEIsSUFBSUQsRUFBS0MsTUFHakIscUJBUUksT0FQQUosS0FBS2EsZ0JBQWtCLEdBQ3ZCYixLQUFLVyxTQUFTSSxTQUFRWCxJQUNkQSxFQUFRSSxVQUFVUSxTQUFTLGlCQUMzQmhCLEtBQUthLGdCQUFnQkksS0FBS2IsTUFHbENjLFFBQVFDLElBQUluQixLQUFLYSxpQkFDVmIsS0FBS2EsZ0JBRWhCLDBCQVFJLE9BUEFiLEtBQUtjLHFCQUF1QixHQUM1QmQsS0FBS29CLGVBQWVMLFNBQVFYLElBQ3hCLE1BQU1pQixFQUFZakIsRUFBUVAsY0FBYyxnQkFDcEN3QixHQUNBckIsS0FBS2MscUJBQXFCRyxLQUFLSyxPQUFPRCxFQUFVdkIsaUJBR2pERSxLQUFLYyxxQkFFaEIscUJBSUksT0FIS3hCLEVBQU1ZLFdBQ1BaLEVBQU1ZLFNBQVcsSUFBSVosR0FFbEJBLEVBQU1ZLFVDakNyQlosRUFBTUMsZSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb29kcyB9IGZyb20gXCIuL2Zvb2RzXCI7XG5leHBvcnQgY2xhc3MgU2NvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgZ2V0IHRvdGFsU2NvcmUoKSB7XG4gICAgICAgIGNvbnN0IGZvb2RzID0gRm9vZHMuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgcmV0dXJuIGZvb2RzLmFjdGl2ZUVsZW1lbnRzU2NvcmUucmVkdWNlKCh0b3RhbCwgc2NvcmUpID0+IHRvdGFsICsgc2NvcmUsIDApO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZV9fbnVtYmVyJykudGV4dENvbnRlbnQgPSBTdHJpbmcodGhpcy50b3RhbFNjb3JlKTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIVNjb3JlLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBTY29yZS5pbnN0YW5jZSA9IG5ldyBTY29yZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTY29yZS5pbnN0YW5jZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTY29yZSB9IGZyb20gXCIuL3Njb3JlXCI7XG5leHBvcnQgY2xhc3MgRm9vZCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0V2ZW50SGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgY2xpY2tFdmVudEhhbmRsZXIoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnZm9vZC0tYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IHNjb3JlID0gU2NvcmUuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgc2NvcmUucmVuZGVyKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRm9vZCB9IGZyb20gXCIuL2Zvb2RcIjtcbmV4cG9ydCBjbGFzcyBGb29kcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vZCcpO1xuICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50c1Njb3JlID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIG5ldyBGb29kKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IGFjdGl2ZUVsZW1lbnRzKCkge1xuICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvb2QtLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2FjdGl2ZUVsZW1lbnRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUVsZW1lbnRzO1xuICAgIH1cbiAgICBnZXQgYWN0aXZlRWxlbWVudHNTY29yZSgpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZSA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZUVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb29kU2NvcmUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb29kX19zY29yZScpO1xuICAgICAgICAgICAgaWYgKGZvb2RTY29yZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmUucHVzaChOdW1iZXIoZm9vZFNjb3JlLnRleHRDb250ZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIUZvb2RzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBGb29kcy5pbnN0YW5jZSA9IG5ldyBGb29kcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBGb29kcy5pbnN0YW5jZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGb29kcyB9IGZyb20gXCIuL2Zvb2RzXCI7XG5Gb29kcy5nZXRJbnN0YW5jZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==