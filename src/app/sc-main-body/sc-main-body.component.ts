import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sc-main-body',
  templateUrl: './sc-main-body.component.html',
  styleUrls: ['./sc-main-body.component.scss'],
})
export class ScMainBodyComponent implements OnInit {
  title = 'Servant Center';

  sampleBody = `

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque ipsum in dui ultricies maximus. Praesent sollicitudin malesuada urna et egestas. Aenean a lobortis felis. Praesent mollis enim velit, quis elementum neque condimentum quis. Nunc sed odio nulla. Ut in arcu ipsum. Mauris ultrices quis diam nec consectetur. Praesent finibus quam ac magna rutrum euismod. Quisque eget mollis mi. Duis condimentum elementum porta. Nunc tellus nisi, pretium eget mi congue, blandit rutrum lacus. Integer placerat risus dui, ut blandit tellus pretium eget. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis sem at tellus tincidunt varius. Pellentesque id purus quis libero maximus tincidunt.

  Curabitur facilisis nibh sit amet nisl malesuada, vel dictum ante condimentum. Donec rutrum bibendum tincidunt. Nullam lacinia diam in lectus convallis, eu elementum orci fermentum. Praesent eget tortor dolor. Vestibulum nec condimentum lorem. Cras egestas feugiat nulla, nec suscipit turpis egestas id. Quisque consectetur laoreet nibh, eget tincidunt ex dignissim in. Mauris et condimentum dui, vitae rhoncus velit.

  Etiam maximus nec magna vehicula vulputate. In vel auctor enim. In ut nunc interdum est pretium pulvinar. Vestibulum eros risus, pretium eget arcu sit amet, pharetra fringilla lectus. Quisque ornare imperdiet felis, tincidunt placerat nisi condimentum at. Suspendisse nec sem et nunc dignissim placerat ac et mauris. Donec eu venenatis tortor. Mauris in lacus non sapien mattis accumsan id eu lacus. Sed posuere ipsum odio, ut convallis leo placerat sed. Integer mattis eget metus quis congue. Nulla laoreet erat hendrerit, hendrerit orci ornare, dapibus eros. Vivamus placerat turpis ac elementum sagittis. In rutrum urna id rhoncus pretium. Aliquam sed bibendum nisi. In hac habitasse platea dictumst. Donec sit amet viverra nisi.

  Aliquam cursus id lectus nec tincidunt. Suspendisse potenti. Maecenas dignissim elit id faucibus varius. Donec id odio quam. Mauris quis felis vitae massa placerat posuere. Aliquam auctor commodo ex. Maecenas vehicula auctor turpis ac tristique. Ut semper leo vel ante accumsan cursus. Sed ac augue sit amet metus ultrices viverra in vitae arcu. Cras volutpat pharetra ipsum, in hendrerit velit eleifend a. Suspendisse vitae eleifend urna. Nulla est dui, facilisis eu sodales tristique, fermentum et metus. Aenean interdum magna erat, euismod viverra nisl ornare ac.

  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed luctus dictum lorem, sit amet sodales enim dictum eget. Mauris ut sollicitudin dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pellentesque nec augue quis tristique. Duis ac luctus lacus. Donec ultricies odio rutrum leo cursus tristique vitae vitae arcu.

  Etiam ac nibh quis nisi ullamcorper varius non et nulla. Integer vitae semper elit. Quisque vel nunc faucibus, ultrices tortor eget, porta quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus orci tellus, imperdiet ac finibus non, venenatis at nisi. Nam sollicitudin magna ut dapibus luctus. Morbi vel dictum eros. Cras at viverra turpis. Sed lacinia ornare dui, sit amet fringilla nisi condimentum vel. Nunc felis sem, dictum ut malesuada et, dapibus sed leo. Maecenas sagittis nisl nisl, quis facilisis diam ullamcorper vitae. Suspendisse quis arcu et nisl volutpat fermentum vitae eu nulla. Maecenas tincidunt, libero et euismod egestas, quam sapien molestie odio, at posuere neque sem et lectus. Sed posuere sapien neque, sed sagittis ex accumsan quis. Pellentesque augue ante, tristique quis est vel, mollis hendrerit ligula.

  Duis ultrices sapien et viverra posuere. Nullam gravida mollis dictum. Donec vitae facilisis nisl. Mauris pharetra risus eget mi venenatis feugiat. Aliquam erat volutpat. Vestibulum urna lectus, lacinia et eros nec, euismod lobortis libero. Curabitur bibendum purus sed ante pretium, ut sagittis orci pellentesque. Curabitur massa dui, varius in dapibus ac, aliquet ac est. Duis ullamcorper vestibulum vestibulum. Quisque pellentesque eu orci vel viverra. Pellentesque auctor turpis lectus, rhoncus tincidunt metus feugiat non.

  Nullam imperdiet nunc et turpis egestas tristique. Cras rhoncus justo ac libero rutrum, vitae volutpat erat aliquam. Integer quis vulputate elit. Pellentesque ac tempus tellus. Morbi aliquam porttitor nibh ut feugiat. Cras quis laoreet magna. Cras interdum pellentesque ultrices. Nunc hendrerit dolor in dui dignissim ultricies. Nunc consectetur tortor sed dictum tincidunt. Duis lacus turpis, malesuada ac iaculis non, placerat eu nulla. Nullam vel nunc sed nunc tincidunt congue. Nullam eget arcu id urna commodo egestas. In nisi lectus, pharetra et laoreet vel, semper ut turpis.

  Nulla interdum imperdiet nisi, sit amet pharetra ex tincidunt non. Donec efficitur luctus neque, sed tincidunt dui vehicula dignissim. Donec a vestibulum magna. Etiam id risus suscipit, iaculis odio quis, dignissim ex. Pellentesque condimentum, est eget egestas malesuada, diam arcu scelerisque neque, non maximus neque tortor eget libero. In scelerisque ipsum eu velit pulvinar varius. Duis imperdiet lorem dolor, porta dapibus odio vestibulum eget. Vivamus elit lectus, efficitur eu finibus sed, imperdiet sit amet velit. Donec in rutrum mi. Vestibulum congue turpis nisl, ac vulputate ligula varius id. Integer nec tortor maximus augue ullamcorper faucibus. Fusce venenatis sem sed libero malesuada scelerisque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel condimentum tortor. Donec ut maximus urna. Fusce tristique, enim eu lacinia semper, risus orci rhoncus est, eu viverra ipsum metus et leo.

  Proin vel tortor a tellus suscipit volutpat. Aliquam mollis tempor euismod. Praesent ut justo at quam facilisis iaculis eu at est. Integer posuere pharetra luctus. Ut mollis viverra risus, in condimentum diam molestie vel. Pellentesque odio velit, lobortis id ullamcorper vitae, venenatis interdum sapien. Integer in velit interdum metus faucibus dapibus. In pharetra dignissim eros in egestas. Cras condimentum felis in luctus molestie. Etiam placerat nisi a leo facilisis, vitae dignissim erat fringilla. Sed consectetur sed diam non elementum. Mauris purus enim, tempor pretium lacus vel, congue accumsan dolor. `;

  constructor() {}

  ngOnInit(): void {
    console.log('sc main component');
  }
}
