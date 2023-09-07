import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceProxyService } from '@shared/service-proxies/usuario/usuario-service-proxy.service';
import { UsuarioDto } from '@shared/service-proxies/usuario/usuario-dto'
import {
  AvatarOptions, AvatarStyle,
  Clothes, FacialHair, Top, Eyes, Mouth, Skin, Accessories, Eyebrow,
  Graphic, FacialHairColor, ClothesColor, HatColor, HairColor
} from 'avatar-angular-kapibara';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-or-edit-usuario',
  templateUrl: './create-or-edit-usuario.component.html',
  styleUrls: ['./create-or-edit-usuario.component.css']
})
export class CreateOrEditUsuarioComponent implements OnInit {

  @Output() onSave = new EventEmitter<any>();

  id: number = null;
  avatar: AvatarOptions = new AvatarOptions();
  editing: boolean = false;
  active: boolean = false;

  usuarioForm: FormGroup = null;

  constructor(
    private formBuilder: FormBuilder,
    private _service: UsuarioServiceProxyService,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit(): void {
    if (this.id > 0) {
      this.editing = true;
      this._service.get(this.id)
        // .pipe(finalize(() => {
        //   abp.ui.clearBusy();
        // }))
        .subscribe((result: UsuarioDto) => {
          this.usuarioForm = this.formBuilder.group({
            id: [result.id],
            nome: [result.nome, Validators.required],
            tipo: [result.tipo],

            olho: [result.olho],
            sobrancelha: [result.sobrancelha],
            boca: [result.boca],
            pele: [result.pele],
            chapeu_cabelo: [result.chapeu_cabelo],
            acessorio: [result.acessorio],
            cor_cabelo: [result.cor_cabelo],
            cor_chapeu: [result.cor_chapeu],
            barba: [result.barba],
            cor_barba: [result.cor_barba],
            roupa: [result.roupa],
            cor_roupa: [result.cor_roupa],
            estampa: [result.estampa],
          });
          this.setConfigAvatar(result);
          this.active = true;
        });
    }
    else {
      this.editing = false;
      this.generateRandom();
      this.usuarioForm = this.formBuilder.group({
        id: [''],
        nome: ['', Validators.required],
        senha: [this.generatePassword(), Validators.required],
        tipo: [1],

        olho: [this.avatar.eyes],
        sobrancelha: [this.avatar.eyebrow],
        boca: [this.avatar.mouth],
        pele: [this.avatar.skin],
        chapeu_cabelo: [this.avatar.top],
        acessorio: [this.avatar.accessories],
        cor_cabelo: [this.avatar.hairColor],
        cor_chapeu: [this.avatar.hatColor],
        barba: [this.avatar.facialHair],
        cor_barba: [this.avatar.facialHairColor],
        roupa: [this.avatar.clothes],
        cor_roupa: [this.avatar.clothColor],
        estampa: [this.avatar.graphic],
      });
      this.active = true;
    }
  }

  generatePassword(): string {
    return Math.random().toString(36).substr(2, 10);
  }

  generateRandom() {
    this.avatar.getRandom();
    // if (this.usuarioForm)
    //   this.usuarioForm.setValue({
    //     olho: this.avatar.eyes,
    //     sobrancelha: this.avatar.eyebrow,
    //     boca: this.avatar.mouth,
    //     pele: this.avatar.skin,
    //     chapeu_cabelo: this.avatar.top,
    //     acessorio: this.avatar.accessories,
    //     cor_cabelo: this.avatar.hairColor,
    //     cor_chapeu: this.avatar.hatColor,
    //     barba: this.avatar.facialHair,
    //     cor_barba: this.avatar.facialHairColor,
    //     roupa: this.avatar.clothes,
    //     cor_roupa: this.avatar.clothColor,
    //     estampa: this.avatar.graphic,
    //   });
  }

  // setConfigAvatarNoForm(result: UsuarioDto = null): void {
  //   this.usuarioForm.setValue({
  //     olho: this.avatar.eyes,
  //     sobrancelha: this.avatar.eyebrow,
  //     boca: this.avatar.mouth,
  //     pele: this.avatar.skin,
  //     chapeu_cabelo: this.avatar.top,
  //     acessorio: this.avatar.accessories,
  //     cor_cabelo: this.avatar.hairColor,
  //     cor_chapeu: this.avatar.hatColor,
  //     barba: this.avatar.facialHair,
  //     cor_barba: this.avatar.facialHairColor,
  //     roupa: this.avatar.clothes,
  //     cor_roupa: this.avatar.clothColor,
  //     estampa: this.avatar.graphic,
  //   });
  // }

  getIndexFromString(value: string, enumRef: any): number {
    return Object.values(enumRef).indexOf(value);
  }

  getValueFromIndex(index: number, enumRef: any): any {
    return Object.keys(enumRef)[index];
  }

  getValueFromString(item: string, enumRef: any): any {
    return Object.values(enumRef).find(x => x == item);
  }

  setConfigAvatar(result: UsuarioDto = null): void {
    this.avatar.eyes = this.getValueFromString(result.olho, Eyes);
    this.avatar.eyebrow = this.getValueFromString(result.sobrancelha, Eyebrow);
    this.avatar.mouth = this.getValueFromString(result.boca, Mouth);
    this.avatar.skin = this.getValueFromString(result.pele, Skin);
    this.avatar.top = this.getValueFromString(result.chapeu_cabelo, Top);
    this.avatar.accessories = this.getValueFromString(result.acessorio, Accessories);
    this.avatar.hairColor = this.getValueFromString(result.cor_cabelo, HairColor);
    this.avatar.hatColor = this.getValueFromString(result.cor_chapeu, HatColor);
    this.avatar.facialHair = this.getValueFromString(result.barba, FacialHair);
    this.avatar.facialHairColor = this.getValueFromString(result.cor_barba, FacialHairColor);
    this.avatar.clothes = this.getValueFromString(result.roupa, Clothes);
    this.avatar.clothColor = this.getValueFromString(result.cor_roupa, ClothesColor);
    this.avatar.graphic = this.getValueFromString(result.estampa, Graphic);
  }

  onDownloadPNG = () => {
    let svgNode = document.getElementById('svgid');
    let canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 408;
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let anyWindow = window as any;
    let DOMURL = anyWindow.URL || anyWindow.webkitURL || window;
    let data = svgNode.innerHTML;
    let svg = new Blob([data], { type: 'image/svg+xml' });
    let img = new Image(canvas.width, canvas.height);
    let url = DOMURL.createObjectURL(svg);
    img.onload = () => {
      ctx.save();
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.restore();
      DOMURL.revokeObjectURL(url);

      let a = document.createElement('a');
      a.href = canvas.toDataURL('image/png');
      a.download = 'avatar-PCLJ.png';
      a.click();

      // canvas.toBlob(imageBlob => {
      // this._uploadService.uploadBlobFotoPerfil(imageBlob)
      //   .then((fileName) => {
      //     this.loading = false;
      //     this.setFotoDePerfil(fileName);
      //   })
      //   .catch((error) => {
      //     this.loading = false;
      //     abp.message.error("Erro no upload");
      //   });
      // });
    };
    img.src = url;
  }

  save(): void {
    let canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 408;

    // var dataURL = canvas.toDataURL();
    // this._service.upload(dataURL);
    canvas.toBlob((blob) => {
      let file = new File([blob], "fileName.jpg", { type: "image/jpeg" })
      this._service.upload(file);
    }, 'image/jpeg');
    

  }

  save2(): void {
    this._service.create(this.usuarioForm.value)
      .subscribe(() => {
        alert('Salvo');
        this.onSave.emit();
        this.bsModalRef.hide();
      });
  }

}
