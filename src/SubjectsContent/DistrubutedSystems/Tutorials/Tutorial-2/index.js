import { textVarient } from "../../../../Utils/staticData";
import { distributedSystems } from "../../../../Utils/images";
import { OrderList } from "../../../../Components/ContentControl/list";
import Img from "../../../../Components/ContentControl/image";

import CustomGrid from "../../../../Components/ContentGrid";

const cryptography = [
  {
    type: "title",
    variant: textVarient.h4,
    content: "Cryptography",
    style: {
      textAlign: "center",
    },
  },

  {
    type: "text",
    variant: textVarient.body1,
    content: (
      <>
        '<b>Cryptography</b>' is the practice and study of techniques for
        securing communication and data in the presence of adversaries. <br /> '
        <b>Crypt</b>' meanes hidden or vault and '<b>graphy</b>' meanes write or
        study
      </>
    ),
  },

  {
    type: "image",
    style: {
      textAlign: "center",
      width: "50vw",
      height: "29vh",
      margin: "1%",
    },
    source: distributedSystems["tutorial-2"].image1,
  },

  {
    type: "text",
    style: {
      textAlign: "center",
    },
    content: (
      <>
        Cryptography is two types those are,
        <OrderList
          list={[<b>Symentric Cryptography</b>, <b>Asymentric Cryptography</b>]}
          position="center"
          width="360"
        />
      </>
    ),
  },

  {
    type: "title",
    variant: textVarient.heading,
    content: "What Is Symentric Cryptography?",
  },

  {
    type: "text",
    variant: textVarient.body1,
    content: (
      <>
        It is cryptographic protocol where sender and receiver use a single{" "}
        <b>secreat key</b> for encryption and decreption
      </>
    ),
  },

  {
    type: "image",
    style: {
      textAlign: "center",
      width: "50vw",
      height: "50vh",
      margin: "3%",
    },
    source: distributedSystems["tutorial-2"].image2,
  },

  {
    type: "text",
    content: (
      <CustomGrid
        grids={[
          {
            columns: 8,
            content: (
              <>
                In behind pic, A,B,C are indivudual users, each user is
                genarating 2 secreat keys meanes total (3(3-1)) 6 keys but
                actually we need only 3 keys for 3 users. so number of keys are
                increased with respect to users. <br />
                ex : if you add one more user then user "A" will genarates one
                more secreat key. <br />
                So <b>O(n)</b> = <b>exponential</b> for symentric cryptography
                <br />
                <br />
                Symentric cryptography is <b>two</b> types
                <br />
                <br />
                {/* <OrderList /> */}
                <OrderList
                  list={[<b>Stram cypher</b>, <b>Block cypher</b>]}
                  position="center"
                  width="360"
                />
              </>
            ),
          },
          {
            columns: 4,
            content: (
              <>
                <Img
                  src={distributedSystems["tutorial-2"].image3}
                  alt={"Ex"}
                  style={{ width: "25vw", height: "35vh" }}
                />
              </>
            ),
          },
        ]}
        space={0}
      />
    ),
  },

  {
    type: "title",
    variant: textVarient.subtitle1,
    content: "Stream Cypher",
    style: {
      textAlign: "",
      textDecoration: "underline black",
    },
  },
];

export default cryptography;
