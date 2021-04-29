import React from 'react';
import styles from './Dashboard.module.scss';
import PropTypes from 'prop-types';

const Dashboard = ({ children }) => {
  return (
    <div className={styles.root}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        varius tincidunt euismod. Suspendisse potenti. Etiam fermentum lectus
        odio, ac maximus sapien placerat in. Nullam elementum ut risus hendrerit
        molestie. Aliquam turpis massa, interdum quis odio eget, convallis
        suscipit augue. Proin pharetra nisi aliquet, porttitor mauris et,
        maximus risus. Pellentesque ut augue lacus. Aenean ac purus leo. Cras
        ipsum ante, lacinia sed vestibulum quis, rutrum vitae quam. Quisque ac
        pulvinar nisi. Nunc vehicula faucibus dui non luctus. Ut lacus orci,
        consectetur at felis a, luctus porta lectus. Aliquam ultrices viverra
        tellus, in iaculis elit blandit sed. Cras sollicitudin leo sed tortor
        feugiat venenatis. Proin mollis dolor quis augue ornare, placerat
        ultrices lacus auctor. Aliquam imperdiet sapien nec nisl malesuada, sit
        amet euismod lorem varius. Nam a volutpat ipsum. Etiam congue enim in
        tristique facilisis. Aliquam in leo facilisis, accumsan massa id,
        accumsan dui. Sed neque massa, feugiat vel tellus vel, bibendum
        facilisis purus. Aliquam erat volutpat. Nulla condimentum velit metus,
        lacinia vehicula turpis euismod eu. Etiam consectetur eros non leo
        malesuada, eget lobortis arcu tincidunt. Pellentesque eu ultricies
        purus. Phasellus vel mollis augue, sed sollicitudin lectus. Aenean
        sapien ligula, iaculis a nulla non, lacinia ultricies ipsum. Cras eu
        finibus ligula. Sed auctor turpis sit amet tincidunt blandit. Duis
        finibus dapibus arcu, et malesuada purus finibus et. Integer imperdiet
        commodo tortor vitae accumsan. Maecenas vitae lacus tincidunt, pharetra
        nibh in, malesuada sapien. Integer at volutpat ex, vel semper augue.
        Pellentesque vel arcu et risus porta blandit. Vivamus auctor diam eu
        nunc facilisis, vestibulum ornare augue ultricies. Duis ultrices elit
        vitae egestas volutpat. Donec sit amet diam aliquam, rutrum eros ut,
        pellentesque urna. Morbi eu elit pellentesque, consectetur metus vel,
        finibus sapien. Suspendisse maximus fringilla diam, non pellentesque
        erat sagittis non. Praesent id ipsum tincidunt, pretium neque id,
        finibus mi. Aenean ullamcorper consectetur felis euismod tempor. Quisque
        quis pharetra lacus. Nunc feugiat scelerisque ligula, a finibus mauris
        sodales eu. Nullam sit amet hendrerit lorem. Nulla nec sapien nulla.
        Vivamus iaculis non enim id posuere. Ut nec nisi mi. Fusce in tortor
        viverra nibh placerat suscipit at id mauris. Vivamus mattis turpis
        lacinia nunc sollicitudin iaculis. Fusce convallis lorem quis urna
        lobortis auctor. Nam a purus vestibulum, accumsan enim a, elementum
        tortor. Vestibulum in lectus tortor. Maecenas placerat, ex id fringilla
        lacinia, lorem justo gravida elit, sit amet dapibus ante felis non
        sapien. Sed vel metus varius, suscipit velit ut, euismod libero.
        Curabitur eu nunc accumsan, mollis felis non, feugiat orci. Nam iaculis
        id justo non eleifend. Vivamus nec dignissim ipsum, at lobortis eros.
        Integer ultrices a lectus non laoreet. Donec eget magna dignissim,
        tincidunt elit in, luctus quam. Nulla laoreet ultricies arcu a
        pellentesque. Pellentesque eu porttitor enim, vel pellentesque odio. Sed
        pretium quis turpis ut placerat. Donec a fermentum metus, nec venenatis
        leo. Fusce vel magna dui. Sed et mauris sapien. Morbi molestie nisi sit
        amet magna hendrerit dapibus. Praesent feugiat sapien lectus, et
        interdum sem mattis quis. Pellentesque dignissim massa in ipsum feugiat,
        ac euismod diam blandit. Sed mattis semper leo, sit amet placerat quam
        consectetur placerat. Cras vel egestas erat, vel auctor ligula. Nunc
        convallis bibendum est nec accumsan. Nulla lacinia placerat eros non
        bibendum. Donec sit amet nunc non ligula aliquet cursus sed sed velit.
        Fusce tristique lobortis sapien in venenatis. Nulla pellentesque auctor
        ex, quis suscipit mauris. Ut ut justo congue, semper nulla et, interdum
        dui. Pellentesque facilisis nec nunc vel efficitur. Donec eleifend
        tristique diam et bibendum. Praesent dapibus ac lacus ac luctus. Morbi
        aliquam neque id mauris pharetra placerat. Quisque accumsan faucibus
        ipsum eget ultrices. Ut volutpat ultrices ultrices. Vivamus suscipit
        massa tincidunt ipsum tempor, eu blandit velit faucibus. Fusce rutrum
        fermentum diam, rhoncus tincidunt neque finibus nec. Donec nunc elit,
        luctus ut eros nec, imperdiet porta justo. Proin finibus orci commodo
        sapien porta, ut tincidunt turpis dictum. Integer pulvinar libero nec
        sem fermentum malesuada. Morbi vulputate ex quis enim vulputate lacinia.
        Sed in pharetra arcu, nec bibendum arcu. Integer et venenatis elit.
        Pellentesque a volutpat tellus, eget porttitor lacus. Aliquam mattis
        lacus faucibus, rutrum odio vel, mattis orci. Sed sollicitudin, lacus eu
        iaculis varius, quam nisi pretium mauris, et blandit nulla odio quis
        enim. Phasellus in velit mauris. Suspendisse metus nisi, scelerisque ac
        massa nec, viverra luctus risus. Aenean eleifend viverra hendrerit. Sed
        quis ante diam. Pellentesque efficitur lacinia risus, eu rutrum dolor
        vulputate vitae. Donec et nisi ut libero feugiat pretium in ut leo. Cras
        in condimentum diam. In eros sapien, suscipit et felis in, venenatis
        egestas ipsum. Nam dictum sapien tortor, ac iaculis eros molestie eu.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        accumsan sodales libero id fermentum. Donec congue tellus eu ultrices
        pharetra. Aenean nec lectus enim. Aliquam erat volutpat. Donec euismod
        ante ultricies nunc tempor porttitor. Integer at malesuada odio, nec
        luctus ipsum. Pellentesque massa risus, mattis sed nisl vitae, maximus
        auctor risus. Proin pharetra felis vitae facilisis tincidunt. Vestibulum
        sit amet orci velit. Donec fermentum mauris a augue eleifend, nec
        ultrices eros volutpat. Nunc eget dolor vel augue dictum pulvinar. Duis
        congue lorem sed lorem scelerisque gravida. Quisque facilisis in diam et
        posuere. Duis pharetra varius eleifend. Cras pulvinar ex at purus ornare
        finibus. Morbi malesuada porta rhoncus. Phasellus mollis, neque vitae
        sodales pellentesque, mi ligula tempus nisi, in ornare mauris lorem id
        leo. Praesent vitae cursus lorem, eu dignissim augue. Maecenas at sapien
        tempus, faucibus purus dictum, rutrum mi. Ut at molestie nibh. Fusce
        eleifend tellus a nibh rhoncus, in interdum orci pellentesque. Sed
        convallis in nisl vel blandit. In porttitor elementum porta. Mauris
        malesuada lacus et ligula bibendum tempor. Vestibulum leo magna,
        faucibus vel mauris ut, mollis aliquam nisl. Sed eu mi vel augue
        placerat consectetur a at massa. Aliquam volutpat leo et libero porta,
        at efficitur est bibendum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Pellentesque varius tincidunt euismod. Suspendisse
        potenti. Etiam fermentum lectus odio, ac maximus sapien placerat in.
        Nullam elementum ut risus hendrerit molestie. Aliquam turpis massa,
        interdum quis odio eget, convallis suscipit augue. Proin pharetra nisi
        aliquet, porttitor mauris et, maximus risus. Pellentesque ut augue
        lacus. Aenean ac purus leo. Cras ipsum ante, lacinia sed vestibulum
        quis, rutrum vitae quam. Quisque ac pulvinar nisi. Nunc vehicula
        faucibus dui non luctus. Ut lacus orci, consectetur at felis a, luctus
        porta lectus. Aliquam ultrices viverra tellus, in iaculis elit blandit
        sed. Cras sollicitudin leo sed tortor feugiat venenatis. Proin mollis
        dolor quis augue ornare, placerat ultrices lacus auctor. Aliquam
        imperdiet sapien nec nisl malesuada, sit amet euismod lorem varius. Nam
        a volutpat ipsum. Etiam congue enim in tristique facilisis. Aliquam in
        leo facilisis, accumsan massa id, accumsan dui. Sed neque massa, feugiat
        vel tellus vel, bibendum facilisis purus. Aliquam erat volutpat. Nulla
        condimentum velit metus, lacinia vehicula turpis euismod eu. Etiam
        consectetur eros non leo malesuada, eget lobortis arcu tincidunt.
        Pellentesque eu ultricies purus. Phasellus vel mollis augue, sed
        sollicitudin lectus. Aenean sapien ligula, iaculis a nulla non, lacinia
        ultricies ipsum. Cras eu finibus ligula. Sed auctor turpis sit amet
        tincidunt blandit. Duis finibus dapibus arcu, et malesuada purus finibus
        et. Integer imperdiet commodo tortor vitae accumsan. Maecenas vitae
        lacus tincidunt, pharetra nibh in, malesuada sapien. Integer at volutpat
        ex, vel semper augue. Pellentesque vel arcu et risus porta blandit.
        Vivamus auctor diam eu nunc facilisis, vestibulum ornare augue
        ultricies. Duis ultrices elit vitae egestas volutpat. Donec sit amet
        diam aliquam, rutrum eros ut, pellentesque urna. Morbi eu elit
        pellentesque, consectetur metus vel, finibus sapien. Suspendisse maximus
        fringilla diam, non pellentesque erat sagittis non. Praesent id ipsum
        tincidunt, pretium neque id, finibus mi. Aenean ullamcorper consectetur
        felis euismod tempor. Quisque quis pharetra lacus. Nunc feugiat
        scelerisque ligula, a finibus mauris sodales eu. Nullam sit amet
        hendrerit lorem. Nulla nec sapien nulla. Vivamus iaculis non enim id
        posuere. Ut nec nisi mi. Fusce in tortor viverra nibh placerat suscipit
        at id mauris. Vivamus mattis turpis lacinia nunc sollicitudin iaculis.
        Fusce convallis lorem quis urna lobortis auctor. Nam a purus vestibulum,
        accumsan enim a, elementum tortor. Vestibulum in lectus tortor. Maecenas
        placerat, ex id fringilla lacinia, lorem justo gravida elit, sit amet
        dapibus ante felis non sapien. Sed vel metus varius, suscipit velit ut,
        euismod libero. Curabitur eu nunc accumsan, mollis felis non, feugiat
        orci. Nam iaculis id justo non eleifend. Vivamus nec dignissim ipsum, at
        lobortis eros. Integer ultrices a lectus non laoreet. Donec eget magna
        dignissim, tincidunt elit in, luctus quam. Nulla laoreet ultricies arcu
        a pellentesque. Pellentesque eu porttitor enim, vel pellentesque odio.
        Sed pretium quis turpis ut placerat. Donec a fermentum metus, nec
        venenatis leo. Fusce vel magna dui. Sed et mauris sapien. Morbi molestie
        nisi sit amet magna hendrerit dapibus. Praesent feugiat sapien lectus,
        et interdum sem mattis quis. Pellentesque dignissim massa in ipsum
        feugiat, ac euismod diam blandit. Sed mattis semper leo, sit amet
        placerat quam consectetur placerat. Cras vel egestas erat, vel auctor
        ligula. Nunc convallis bibendum est nec accumsan. Nulla lacinia placerat
        eros non bibendum. Donec sit amet nunc non ligula aliquet cursus sed sed
        velit. Fusce tristique lobortis sapien in venenatis. Nulla pellentesque
        auctor ex, quis suscipit mauris. Ut ut justo congue, semper nulla et,
        interdum dui. Pellentesque facilisis nec nunc vel efficitur. Donec
        eleifend tristique diam et bibendum. Praesent dapibus ac lacus ac
        luctus. Morbi aliquam neque id mauris pharetra placerat. Quisque
        accumsan faucibus ipsum eget ultrices. Ut volutpat ultrices ultrices.
        Vivamus suscipit massa tincidunt ipsum tempor, eu blandit velit
        faucibus. Fusce rutrum fermentum diam, rhoncus tincidunt neque finibus
        nec. Donec nunc elit, luctus ut eros nec, imperdiet porta justo. Proin
        finibus orci commodo sapien porta, ut tincidunt turpis dictum. Integer
        pulvinar libero nec sem fermentum malesuada. Morbi vulputate ex quis
        enim vulputate lacinia. Sed in pharetra arcu, nec bibendum arcu. Integer
        et venenatis elit. Pellentesque a volutpat tellus, eget porttitor lacus.
        Aliquam mattis lacus faucibus, rutrum odio vel, mattis orci. Sed
        sollicitudin, lacus eu iaculis varius, quam nisi pretium mauris, et
        blandit nulla odio quis enim. Phasellus in velit mauris. Suspendisse
        metus nisi, scelerisque ac massa nec, viverra luctus risus. Aenean
        eleifend viverra hendrerit. Sed quis ante diam. Pellentesque efficitur
        lacinia risus, eu rutrum dolor vulputate vitae. Donec et nisi ut libero
        feugiat pretium in ut leo. Cras in condimentum diam. In eros sapien,
        suscipit et felis in, venenatis egestas ipsum. Nam dictum sapien tortor,
        ac iaculis eros molestie eu. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Maecenas accumsan sodales libero id fermentum. Donec
        congue tellus eu ultrices pharetra. Aenean nec lectus enim. Aliquam erat
        volutpat. Donec euismod ante ultricies nunc tempor porttitor. Integer at
        malesuada odio, nec luctus ipsum. Pellentesque massa risus, mattis sed
        nisl vitae, maximus auctor risus. Proin pharetra felis vitae facilisis
        tincidunt. Vestibulum sit amet orci velit. Donec fermentum mauris a
        augue eleifend, nec ultrices eros volutpat. Nunc eget dolor vel augue
        dictum pulvinar. Duis congue lorem sed lorem scelerisque gravida.
        Quisque facilisis in diam et posuere. Duis pharetra varius eleifend.
        Cras pulvinar ex at purus ornare finibus. Morbi malesuada porta rhoncus.
        Phasellus mollis, neque vitae sodales pellentesque, mi ligula tempus
        nisi, in ornare mauris lorem id leo. Praesent vitae cursus lorem, eu
        dignissim augue. Maecenas at sapien tempus, faucibus purus dictum,
        rutrum mi. Ut at molestie nibh. Fusce eleifend tellus a nibh rhoncus, in
        interdum orci pellentesque. Sed convallis in nisl vel blandit. In
        porttitor elementum porta. Mauris malesuada lacus et ligula bibendum
        tempor. Vestibulum leo magna, faucibus vel mauris ut, mollis aliquam
        nisl. Sed eu mi vel augue placerat consectetur a at massa. Aliquam
        volutpat leo et libero porta, at efficitur est bibendum.
      </p>
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.node,
};

export default Dashboard;
