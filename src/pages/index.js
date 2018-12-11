import React, { Component } from 'react'
import Waypoint from 'react-waypoint'
import styled from 'styled-components'

import Layout from '../components/layout'

import Home from '../components/sections/home'

const Section = {
  HOME: 0,
  OTHER: 1
}

const Other = styled.div`
  height: 10000px;
  background-color: lightcyan;
  width: 100%;
`

class IndexPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      scrolledSection: Section.HOME
    }
  }

  render() {
    return (
      <Layout
        shouldHideHeader={this.state.scrolledSection === Section.OTHER}
      >
        <Waypoint
          onEnter={() => {
            console.log('Entered')
            this.setState({scrolledSection: Section.HOME})
          }}
          onLeave={() => {
            console.log('Left')
            this.setState({scrolledSection: Section.OTHER})
          }}
        >
          <div>
            <Home />
          </div>
        </Waypoint>
        <Other>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec tellus elit. In enim massa, porttitor sit amet nibh non, gravida faucibus ante. Etiam vel orci efficitur, feugiat nisi sit amet, dapibus augue. In venenatis tellus et pulvinar pharetra. Nunc vehicula arcu quis placerat aliquet. Mauris efficitur vel lectus quis pulvinar. Integer pulvinar blandit tortor, ut malesuada tellus convallis id. Etiam porttitor leo quis leo efficitur, ac aliquam velit scelerisque. Pellentesque condimentum laoreet faucibus. Vivamus eget egestas enim. Donec vehicula vulputate elit. Fusce eget pellentesque ex. Ut placerat imperdiet odio a varius. Duis nec felis pharetra, condimentum sapien eget, euismod nunc. Vestibulum feugiat maximus suscipit. Integer viverra maximus nisi et cursus.

Donec lacus lorem, pharetra posuere orci et, sollicitudin cursus ex. Morbi ultrices ullamcorper mauris et pretium. Suspendisse potenti. Mauris non arcu convallis, efficitur libero eget, mattis nisl. Vestibulum in sem ultrices, posuere tortor dignissim, scelerisque purus. Donec mauris mauris, lacinia et velit et, aliquet auctor augue. Maecenas sit amet turpis sed erat consequat egestas eu et ante. Aliquam finibus mauris eu est porttitor, eu iaculis purus tincidunt. Nullam ut condimentum dolor. Fusce vitae libero ornare risus convallis viverra. Vestibulum et erat elit. Nam imperdiet sagittis mauris, ut semper eros tincidunt at.

Sed vulputate nec diam semper sollicitudin. Morbi ullamcorper a ligula a eleifend. Fusce elementum vitae elit nec egestas. Maecenas nec lacus id lectus lobortis laoreet. Morbi varius metus ac nulla tempus, at aliquam sem mollis. Integer hendrerit lacinia augue, non aliquet ex vulputate sit amet. In pellentesque scelerisque ex, et posuere velit luctus sed. Etiam mollis dapibus finibus. Ut maximus eleifend tincidunt. Maecenas euismod ultricies magna, vitae porttitor ex dapibus sed. Praesent et ipsum accumsan, cursus magna quis, gravida risus. Sed convallis, ligula eget suscipit porta, est augue consectetur turpis, in laoreet leo urna sed velit. Suspendisse dignissim dolor in dolor euismod, in laoreet dui consectetur.

Aliquam gravida fringilla enim vitae convallis. Morbi viverra nisi vestibulum, lacinia turpis in, condimentum est. Ut ac lobortis libero. Integer sodales ultricies magna sit amet fringilla. Quisque luctus, justo vitae sollicitudin efficitur, augue neque molestie nunc, eget mattis ligula risus sit amet mauris. Proin et sapien quam. Praesent feugiat, ex euismod tincidunt pellentesque, nisi ante consequat lorem, pellentesque lacinia orci magna consequat massa. Quisque condimentum nisl at lectus convallis cursus. Sed tellus tellus, venenatis in tellus non, pellentesque laoreet enim. Sed condimentum molestie ultricies. Morbi placerat iaculis leo, vitae fermentum risus congue ut. Aliquam quis elit eu orci commodo gravida ut a urna. Morbi et gravida arcu, vel sagittis libero. Fusce tincidunt, augue a vulputate lacinia, eros magna pellentesque mi, at bibendum neque sapien at purus. Praesent blandit pulvinar rhoncus. Curabitur sit amet mi ligula.

Sed eu congue nibh, non tincidunt felis. Praesent vel interdum ex, id tristique turpis. Curabitur interdum diam vitae urna aliquet lobortis. Vestibulum finibus elementum turpis, quis placerat eros bibendum id. Sed venenatis tincidunt magna vel sollicitudin. Nam venenatis nec est in convallis. Mauris non dolor iaculis, cursus sem ac, vulputate diam. Nulla condimentum augue mauris, non feugiat odio hendrerit et. Mauris ullamcorper maximus magna, eu hendrerit nisi tempor vel. Mauris vehicula mi in nisl vestibulum, in tristique dolor volutpat. Duis hendrerit eleifend porta. Duis id sapien ullamcorper, posuere nisl eget, ullamcorper dolor. Duis congue rutrum metus non porttitor.

Aliquam lacus tellus, rutrum ac eleifend nec, faucibus sit amet massa. Integer quis nisl et tortor egestas efficitur. Nunc eget massa aliquet, luctus metus dapibus, efficitur velit. Quisque iaculis venenatis nibh. Curabitur porttitor bibendum purus quis pharetra. Maecenas commodo nibh a erat auctor vehicula. Etiam sed lorem nisi. Donec vel convallis dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec aliquet ipsum in tellus porta, a ultricies magna gravida. Aliquam erat volutpat. Nam suscipit molestie felis, vel rhoncus purus sagittis at. Nunc euismod nisl in odio vehicula dapibus. Donec vehicula eros vel ipsum rhoncus consectetur.

Vivamus vestibulum diam vehicula lorem molestie consequat. Quisque aliquet nunc ut nunc bibendum, id ultricies risus venenatis. Cras et lobortis turpis. Vivamus aliquam posuere tempus. Pellentesque gravida orci eu nisl consectetur eleifend. Aenean sit amet lacus nec tortor bibendum pharetra. Vestibulum hendrerit tortor a risus aliquam, vel commodo libero dapibus. Phasellus tincidunt augue feugiat tortor interdum, nec condimentum turpis rutrum. Duis vitae velit lacus. Proin molestie pharetra tellus, in eleifend ante pulvinar et. Ut gravida hendrerit dui, vitae rhoncus quam. Integer nec leo dapibus, eleifend orci in, mattis ex. In vel laoreet nisi. Integer auctor consectetur justo, ut tristique sem tristique congue. Fusce egestas mi at convallis semper. Donec in nibh ac tellus pulvinar efficitur.

Morbi bibendum malesuada augue, et ultrices purus. Maecenas sit amet lacus vel nisl fringilla mollis. Duis tempus libero eget eros pretium hendrerit. Donec sagittis congue consectetur. Integer dictum porta augue at lacinia. Nullam hendrerit lectus vitae lorem egestas, in molestie nibh gravida. Pellentesque non interdum turpis. Suspendisse potenti. Nam fringilla ligula sit amet dapibus vehicula. Nullam id mauris ante.

Etiam pulvinar tincidunt turpis, nec aliquam turpis laoreet non. Aenean quis magna vitae risus congue tristique quis in sem. Praesent elementum nibh dictum purus aliquet, pretium gravida est blandit. Ut pharetra leo et nisi porttitor, blandit cursus risus consectetur. Curabitur in volutpat lorem, et gravida nibh. Fusce purus velit, tincidunt ac leo non, aliquet dictum risus. Pellentesque mollis enim a erat suscipit, non viverra enim sollicitudin. Pellentesque tincidunt scelerisque felis, eu ullamcorper est elementum eget. Mauris scelerisque, sapien ut laoreet ullamcorper, dolor felis tristique sem, ac interdum lorem nibh eu magna. Vivamus vel dignissim est. Nulla lacinia nibh ante, sit amet molestie neque varius non. Praesent ac nulla sapien. Sed eget dapibus nisl, at malesuada lacus.

Mauris ac erat gravida, efficitur sem in, facilisis nisi. Suspendisse venenatis magna sit amet dictum efficitur. Mauris condimentum nibh eu nisl efficitur, eget mattis augue aliquam. Maecenas congue eros felis, ut scelerisque elit sollicitudin eu. Curabitur convallis mi vitae mauris lobortis, vel placerat dui blandit. Fusce placerat libero et lacus mattis, id pretium sem vehicula. Vestibulum sodales ullamcorper eros nec hendrerit. Pellentesque id neque mattis, pharetra eros et, consectetur quam. Suspendisse bibendum porta congue. In eros augue, semper vitae risus at, facilisis semper justo. Nulla et pellentesque mauris. In semper nisi sed porttitor consequat. Ut sapien nibh, pulvinar a vestibulum non, ultricies et lectus. Phasellus scelerisque vehicula pharetra. Maecenas laoreet augue at ex porttitor pretium.

Duis urna metus, lobortis at elit in, rhoncus auctor nulla. Nulla magna lacus, placerat vel venenatis vel, imperdiet et lacus. Aliquam vitae efficitur tellus. Vestibulum a ante posuere, tincidunt ligula et, porta dolor. In maximus, risus sit amet sodales convallis, ante tellus ultricies nisi, at aliquam felis nisl quis nibh. Nullam in sem sit amet lacus tincidunt varius. Sed at risus eget metus condimentum ultricies. Morbi aliquam dui sit amet vehicula placerat. Vivamus pellentesque urna vitae justo tempus lacinia. Pellentesque id risus lacus. Praesent tempor nibh feugiat justo congue, at dictum lectus condimentum. Proin ut turpis imperdiet, tempor nibh in, pulvinar enim.

Aliquam lacinia, tellus vel tincidunt auctor, nulla sem tincidunt magna, id volutpat sapien magna ut urna. Pellentesque elit nulla, porttitor nec leo in, ornare venenatis sem. Sed ac malesuada erat. Proin pellentesque in mi in suscipit. Nulla suscipit nisi at dui varius interdum. Morbi egestas lorem in nunc rhoncus, quis porttitor diam egestas. Ut feugiat pellentesque velit, eget scelerisque odio finibus vitae. Aenean molestie vulputate tortor, ac cursus ante mattis ut. Pellentesque augue ligula, tincidunt vel sapien eu, pretium suscipit mauris. Praesent eleifend quis elit lobortis iaculis. Quisque in vehicula nisl.

Donec fringilla mi vitae viverra tempus. Vivamus tempus magna eu bibendum dignissim. Ut bibendum tristique dolor in dignissim. Nam id nulla fermentum, finibus massa lacinia, semper odio. Aenean ultrices finibus sem quis egestas. Nunc tempus ex ullamcorper, consequat risus nec, ornare ligula. Proin magna sem, pharetra ut lacinia et, auctor sit amet quam. In ultricies non dui non tempus. Mauris eget tellus posuere, faucibus ipsum ut, tempus felis. In in fermentum risus. Aliquam erat volutpat. Duis in tristique nisl, eu varius justo. Quisque malesuada, eros vitae sagittis laoreet, purus urna accumsan tellus, vel condimentum nunc erat in dolor. Pellentesque posuere, eros vitae rutrum egestas, augue leo ullamcorper quam, ut viverra dui nunc ac dolor. Nulla leo tortor, dictum vel vehicula quis, facilisis non erat.

Integer rutrum elit vel turpis eleifend dignissim. Aliquam rhoncus luctus libero, ut volutpat dui porttitor nec. Pellentesque eros enim, maximus at quam tempor, faucibus cursus ante. In velit ligula, viverra quis eros sed, placerat sagittis lacus. Mauris congue libero eu diam dignissim, quis scelerisque risus iaculis. Nulla gravida, nisl at lacinia sodales, nisi libero pharetra lorem, eget dictum orci urna eu magna. Vestibulum sed nisl vel arcu volutpat mollis. Donec id vehicula nisi. Pellentesque magna felis, sodales nec lacinia eget, posuere ut turpis. Duis ullamcorper leo et dignissim euismod. Cras condimentum purus mi, eu varius tortor blandit in. Nunc euismod ex augue, quis consequat nulla gravida vel.

Aenean volutpat mollis quam, non scelerisque est imperdiet sit amet. Phasellus molestie eros ac interdum suscipit. Pellentesque ut mollis lectus. Integer ex massa, dignissim et mi eget, tempus pharetra ex. In hac habitasse platea dictumst. Etiam pretium libero sit amet nibh bibendum dictum. Aliquam facilisis lobortis consectetur. Duis egestas metus ac sem interdum commodo. Praesent bibendum vestibulum justo, vel dapibus est fringilla non. Praesent id urna sed eros consequat semper. Quisque placerat feugiat diam eu tristique. Aenean eget arcu at augue egestas vestibulum a ac nunc. Maecenas posuere mattis nisl, non ultricies enim lobortis vel.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce tincidunt efficitur turpis a ultrices. Ut vitae risus elit. Nulla ac nulla et eros ultricies ornare sit amet quis neque. Nullam id rhoncus ipsum. Praesent eu enim neque. Maecenas diam libero, pharetra non vulputate eget, imperdiet non urna. Phasellus et vulputate metus. Phasellus eu mollis metus. Maecenas at volutpat mi. Donec vitae est sit amet eros scelerisque malesuada a eget est. Quisque cursus, tellus ac luctus lacinia, tortor magna molestie ipsum, a bibendum ex felis consectetur velit. In hac habitasse platea dictumst.

Suspendisse at eleifend nibh. Ut eget lorem eu felis ullamcorper mattis. Vivamus ex ante, vehicula sed pharetra quis, euismod ac ex. Praesent eget consectetur urna. Proin sit amet mattis nibh. Curabitur sollicitudin arcu non rutrum facilisis. Nam dolor libero, pellentesque sed urna at, imperdiet consequat quam. Maecenas ullamcorper magna in porta malesuada. Etiam consequat metus nisi, nec mattis ipsum rhoncus et. Mauris vitae malesuada eros, vel imperdiet quam. Praesent blandit tristique lectus sed commodo. Cras ac libero et magna fringilla tempus eu tristique neque. Sed tincidunt, nibh laoreet ultrices rutrum, odio felis iaculis sem, et dapibus justo diam eu risus.

Nunc pulvinar, dui sed interdum congue, nunc ex lobortis nunc, ut accumsan ante massa ac metus. Pellentesque vel feugiat elit. Vivamus consequat lacinia tincidunt. Nulla facilisi. Nullam tempus arcu ut risus fringilla sagittis. Vivamus laoreet augue a est consequat bibendum. Nulla a lacus diam. Cras aliquet et mi non scelerisque. Mauris nec eros tempus, scelerisque orci vitae, consequat velit.

Etiam venenatis porta nulla quis dignissim. Etiam leo velit, elementum id tortor ac, imperdiet semper diam. Pellentesque in vehicula eros. Nunc sit amet ornare velit, eget vulputate ligula. Ut porttitor pellentesque massa. Nunc pellentesque enim sapien, sit amet imperdiet velit lacinia eu. Aenean vestibulum mollis neque, hendrerit finibus ante imperdiet ac. Vivamus imperdiet ex id velit bibendum lacinia. Donec lectus nulla, posuere sit amet gravida sit amet, gravida ut augue. Suspendisse facilisis consectetur tempus. Ut a sem mattis, lacinia nulla sit amet, euismod lacus. Duis laoreet ante ut diam blandit, euismod tincidunt massa auctor. Integer hendrerit erat et hendrerit fringilla.

Morbi iaculis a neque ac tincidunt. Pellentesque velit odio, interdum eu ante egestas, vulputate tempor odio. Sed tincidunt lorem non congue laoreet. Maecenas ut nibh ut lectus sagittis luctus ac nec risus. In lobortis erat id sem feugiat laoreet. Proin lobortis molestie aliquet. Donec id euismod purus. Aenean eleifend eros nibh, vitae aliquet magna faucibus pellentesque. Duis consequat fermentum est in ultrices. Sed egestas, ex ac commodo fringilla, felis urna commodo sem, et imperdiet dolor justo eu erat. Mauris quis placerat libero, non condimentum nunc.</p>
        </Other>
      </Layout>
    )
  }

}

export default IndexPage
