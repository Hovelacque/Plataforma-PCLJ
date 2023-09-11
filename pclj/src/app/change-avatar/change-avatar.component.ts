import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponentBase } from '@shared/app-component-base';
import { UsuarioDto } from '@shared/service-proxies/usuario/usuario-dto';
import { UsuarioServiceProxyService } from '@shared/service-proxies/usuario/usuario-service-proxy.service';
import {
  AvatarOptions, AvatarAngularKapibaraComponent,
  Clothes, FacialHair, Top, Eyes, Mouth, Skin, Accessories, Eyebrow,
  Graphic, FacialHairColor, ClothesColor, HatColor, HairColor, AvatarEnums,
} from 'avatar-angular-kapibara';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-change-avatar',
  templateUrl: './change-avatar.component.html',
  styleUrls: ['./change-avatar.component.css'],
  providers: [
  ]
})
export class ChangeAvatarComponent extends AppComponentBase implements OnInit {

  @ViewChild('avatar') avatar: AvatarAngularKapibaraComponent;

  options: AvatarOptions = new AvatarOptions();

  topsEnum = Top;
  facialHairEnum = FacialHair;
  clothesEnum = Clothes;

  accessories: AvatarEnums[] = [];
  clothColor: AvatarEnums[] = [];
  clothe: AvatarEnums[] = [];
  eyebrow: AvatarEnums[] = [];
  eyes: AvatarEnums[] = [];
  facialHair: AvatarEnums[] = [];
  facialHairColor: AvatarEnums[] = [];
  graphic: AvatarEnums[] = [];
  hairColor: AvatarEnums[] = [];
  hatColor: AvatarEnums[] = [];
  mouth: AvatarEnums[] = [];
  skin: AvatarEnums[] = [];
  tops: AvatarEnums[] = [];

  constructor(
    public injector: Injector,
    private formBuilder: FormBuilder,
    private _service: UsuarioServiceProxyService,
    private _router: Router
  ) {
    super(injector);
  }

  ngOnInit(): void {
    if (!this.appSession.usuarioId) {
      this._router.navigate(['/home']);
      return;
    }

    this.load();

    this._service.get(this.appSession.usuarioId)
      .subscribe((result: UsuarioDto) => {

        this.options.eyes = this.getValueFromString(result.olho, Eyes);
        this.options.eyebrow = this.getValueFromString(result.sobrancelha, Eyebrow);
        this.options.mouth = this.getValueFromString(result.boca, Mouth);
        this.options.skin = this.getValueFromString(result.pele, Skin);
        this.options.top = this.getValueFromString(result.chapeu_cabelo, Top);
        this.options.accessories = this.getValueFromString(result.acessorio, Accessories);
        this.options.hairColor = this.getValueFromString(result.cor_cabelo, HairColor);
        this.options.hatColor = this.getValueFromString(result.cor_chapeu, HatColor);
        this.options.facialHair = this.getValueFromString(result.barba, FacialHair);
        this.options.facialHairColor = this.getValueFromString(result.cor_barba, FacialHairColor);
        this.options.clothes = this.getValueFromString(result.roupa, Clothes);
        this.options.clothColor = this.getValueFromString(result.cor_roupa, ClothesColor);
        this.options.graphic = this.getValueFromString(result.estampa, Graphic);

      });
  }


  getValueFromString(item: string, enumRef: any): any {
    return Object.values(enumRef).find(x => x == item);
  }

  load(): void {
    this.tops = this.options.getAvatarEnumList('tops', Top);
    this.facialHair = this.options.getAvatarEnumList('facialHair', FacialHair);
    this.clothe = this.options.getAvatarEnumList('clothe', Clothes);
    this.eyes = this.options.getAvatarEnumList('eyes', Eyes);
    this.eyebrow = this.options.getAvatarEnumList('eyebrow', Eyebrow);
    this.mouth = this.options.getAvatarEnumList('mouth', Mouth);
    this.skin = this.options.getAvatarEnumList('skin', Skin);
    this.accessories = this.options.getAvatarEnumList('accessories', Accessories);
    this.clothColor = this.options.getAvatarEnumList('clothColor', ClothesColor);
    this.facialHairColor = this.options.getAvatarEnumList('facialHairColor', FacialHairColor);
    this.graphic = this.options.getAvatarEnumList('graphic', Graphic);
    this.hatColor = this.options.getAvatarEnumList('hatColor', HatColor);
    this.hairColor = this.options.getAvatarEnumList('hairColor', HairColor);
  }

  generateRandom() {
    this.options.getRandom();
  }

  get disabledColourFabric(): boolean {
    if ((this.options.clothes === this.clothesEnum.BLAZER_SHIRT) || (this.options.clothes === this.clothesEnum.BLAZER_SWEATER)) {
      return true;
    }
    return false;
  }

  get disabledHatColour(): boolean {
    if ((this.options.top === this.topsEnum.HIJAB) || (this.options.top === this.topsEnum.TURBAN) ||
      (this.options.top === this.topsEnum.WINTER_HAT1) || (this.options.top === this.topsEnum.WINTER_HAT2) ||
      (this.options.top === this.topsEnum.WINTER_HAT3) || (this.options.top === this.topsEnum.WINTER_HAT4)) {
      return false;
    }
    else return true;
  }

  get disabledHairColour(): boolean {
    if ((this.options.top === this.topsEnum.LONGHAIR_BIGHAIR) || (this.options.top === this.topsEnum.LONGHAIR_BOB) ||
      (this.options.top === this.topsEnum.LONGHAIR_BUN) || (this.options.top === this.topsEnum.LONGHAIR_CURLY) ||
      (this.options.top === this.topsEnum.LONGHAIR_CURVY) || (this.options.top === this.topsEnum.LONGHAIR_DREADS) ||
      (this.options.top === this.topsEnum.LONGHAIR_FRO) || (this.options.top === this.topsEnum.LONGHAIR_FROBAND) ||
      (this.options.top === this.topsEnum.LONGHAIR_NOTTOOLONG) || (this.options.top === this.topsEnum.LONGHAIR_MIAWALLACE) ||
      (this.options.top === this.topsEnum.LONGHAIR_STRAIGHT) || (this.options.top === this.topsEnum.LONGHAIR_STRAIGHT2) ||
      (this.options.top === this.topsEnum.LONGHAIR_STRAIGHTSTRAND) || (this.options.top === this.topsEnum.SHORTHAIR_DREADS01) ||
      (this.options.top === this.topsEnum.SHORTHAIR_DREADS02) || (this.options.top === this.topsEnum.SHORTHAIR_FRIZZLE) ||
      (this.options.top === this.topsEnum.SHORTHAIR_SHAGGYMULLET) || (this.options.top === this.topsEnum.SHORTHAIR_SHORTCURLY) ||
      (this.options.top === this.topsEnum.SHORTHAIR_SHORTFLAT) || (this.options.top === this.topsEnum.SHORTHAIR_SHORTROUND) ||
      (this.options.top === this.topsEnum.SHORTHAIR_SHORTWAVED) || (this.options.top === this.topsEnum.SHORTHAIR_SIDES) ||
      (this.options.top === this.topsEnum.SHORTHAIR_THECAESAR) || (this.options.top === this.topsEnum.SHORTHAIR_THECAESARSIDEPART)) {
      return false;
    }
    else return true;
  }

  download(): void {
    this.avatar.onDownloadPNG('avatar-PCLJ.png');
  };


  save(): void {
    const svgNode = document.getElementById('svgid');
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 408;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const anyWindow = window as any;
    const DOMURL = anyWindow.URL || anyWindow.webkitURL || window;
    const data = svgNode.innerHTML;
    const svg = new Blob([data], { type: 'image/svg+xml' });
    const img = new Image(canvas.width, canvas.height);
    const url = DOMURL.createObjectURL(svg);
    img.onload = () => {
      ctx.save();
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.restore();
      DOMURL.revokeObjectURL(url);

      let result = canvas.toDataURL()
      this.save2(result);
    };
    img.src = url;
  }

  save2(imageBase64: string): void {
    pclj.ui.setBusy();
    this._service.updateAvatar({
      id: this.appSession.usuarioId,
      olho: this.options.eyes,
      sobrancelha: this.options.eyebrow,
      boca: this.options.mouth,
      pele: this.options.skin,
      chapeu_cabelo: this.options.top,
      acessorio: this.options.accessories,
      cor_cabelo: this.options.hairColor,
      cor_chapeu: this.options.hatColor,
      barba: this.options.facialHair,
      cor_barba: this.options.facialHairColor,
      roupa: this.options.clothes,
      cor_roupa: this.options.clothColor,
      estampa: this.options.graphic,
    }, imageBase64)
      .pipe(finalize(() => pclj.ui.clearBusy()))
      .subscribe({
        next: () => {
          this.notify("Salvo com sucesso!");
        },
        error: (result) => {
          pclj.message.error(result.error.message);
        }
      });
  }

}
