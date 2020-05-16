import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from './components/Container';
import SearchBox from './components/search-box';

const data = [
    "first",
    "second",
    "second",
    "second",
    "third",
    "fourth",
    "fifth",
    "sexth",
    "seventh",
    "eighth",
    "nineth",
    "tenth"
]

const App = () => (
  <React.Fragment>
    <Container>
      <SearchBox data={data} />

      {/* <p>
        Mollit occaecat commodo laborum magna sunt nostrud non. Quis do nulla
        culpa dolore sint ipsum amet qui proident aliquip. Laborum cupidatat
        aliqua culpa ex tempor dolor occaecat dolor aliqua irure qui.{" "}
      </p>
      <p>
        Est irure incididunt aute dolor excepteur nostrud et labore. Qui culpa
        quis esse cupidatat amet. Lorem et incididunt tempor labore incididunt
        duis eiusmod aliquip sint veniam exercitation excepteur nostrud
        excepteur. Culpa est nostrud cupidatat quis pariatur et aliqua quis duis
        fugiat quis exercitation amet consectetur. Do in in elit labore est esse
        commodo elit magna qui incididunt qui. Et occaecat nisi ea elit
        exercitation officia Lorem ad. In ut irure aliqua ullamco irure
        exercitation.
      </p>
      <p>
        Nostrud voluptate qui consequat culpa ad ullamco veniam ad in.
        Adipisicing nulla mollit deserunt tempor reprehenderit ullamco nostrud
        cupidatat. Dolor nulla quis do minim. Ad voluptate proident aliqua
        adipisicing in irure ex esse adipisicing ullamco dolor est. Est aute est
        consequat exercitation aute labore amet culpa aliquip culpa consectetur
        eu.
      </p>
      <p>
        Ea sint aliquip veniam aliquip elit quis laborum eu proident aliqua non.
        Qui cupidatat aliqua est cupidatat eu sit fugiat duis in in aliquip.
        Proident esse cillum et nulla duis nisi reprehenderit commodo
        exercitation fugiat ex. Cillum est aliqua quis laborum ipsum. Aliquip
        aliquip consequat ad laboris sunt do id.
      </p>
      <p>
        Dolor deserunt sint incididunt reprehenderit mollit id commodo ea. Et
        dolor dolore quis ex quis ex. Excepteur voluptate aliqua ut aliquip
        incididunt eu magna. Ea amet laborum Lorem esse Lorem enim.
      </p> */}
    </Container>
  </React.Fragment>
);

export default App;
