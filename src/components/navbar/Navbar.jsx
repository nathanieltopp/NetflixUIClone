import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./navbar.scss";
import {useState} from "react";

export default function Navbar() {
    const [isScrolled, setisScrolled] = useState(false);

    window.onscroll = () => {
        setisScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NERMODhASEg4QEA8QEBIQDw8OEA4PFR0WFhURFhUYJSggGBonGxUVITEhJSkrLi4uGB80OTQtOCgtLisBCgoKDg0OGxAQGy0lICAtLy0tLS0vLS0tKy0tLSstLS0tLS0vLS0tLS0tLS0rLS0tLS0tLS0tLS0tLSstLS0tK//AABEIAJ0BQgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgUGBAEDB//EADwQAAIBAQQHBQUIAQQDAAAAAAABAgMFERIxBAYhM1FxchMyQYGxFlOSocEUIjRCUmFzkdFDYoKTIyTw/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAQGAQMFAgf/xAA4EQACAQMBAwgIBgIDAAAAAAAAAQIDBBEFITFxEhMyM0FRscEGFGFygZGh0RUiNFLh8DVCI4Lx/9oADAMBAAIRAxEAPwD8Qm3e+bPMTFTN82RAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAJYnxGJ8SIAOyDdy5IHkMlyQAOapm+bIkqmb5siAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdcMlyQEMlyQAOapm+bIkqmb5siAAAAAaHRdX41IRn2rWPbdgew5bWsf7PGM1JyTdz2XXGtVoN8lPadCppd1Tpc9KP5d+cp7+DKgHpf6FYCq041O0w4vC5bMzM5qCyzRa2lW5k40llpZ3pbPiZ8Fza9krRoxkp4sTayu/c4NCodrUjTvuxO6/O4ypprlIVbSrSq8zNfm2bNnbuOUGm9mY++fwD2Zj75/AavWKfeTvwK+/Z9Y/czINN7Mx96/gOK17IWjxjNTxYndc1cZjXhJ4TNVbSLujB1Jwwlv2r7lMC4siyVpMZyc8OBpZX3nf7Mx98/gMyrwi8NihpN3WgqlOOU921fczANN7Mx98/wDrHszH3z/6zz6zT7zb+BX37PrH7mZBc2rY60eEZqpixSuuuuPLIslaTFyc3G53ZJnvnY8nlZ2EX8OuOf8AV+T+fGcZXHgU4NN7Mx96/gHszH3r+A8esU+8lfgV9+z6x+5mQab2Zj71/AUlo6N2NSVNO/C1t47Ez3CrGbxEjXWnXFrBTrRwns3p+DOQGljq1FpPtXt29wrLYs5aNKMVLFihiyuuEasJPCPVfS7qhT52pHEdm3Ke/duZWgA2HPAOrQdH7WpGm3did1+ZeezMcu1ef6DXOrGGyROtdOuLqLlRjlLZvS8WZkHTp2j9lUlTTvwu6/iWNk2RHSYOWNxcZXNXJ3cGepTUVynuNNG0q1qvMwX5tuzhvKUGj0jVzDGUo1MUltUcKV5nbjEJxn0T1dWda1ajWWM7tqfgeAtbIsv7Tibk4Rjd966/bwLH2ais6zuX+w8yrQi8Nm6hpV1XpqpCOx+1LxZmQfWokm7ner9j4rifNm0554AADrhkuSAhkuSABzVM3zZElUzfNkQAAAYe43Vmbqn0HtqaP2tKVPxuxR6s0LM3VPoOpO7bwOQ5NTyu/wAz6fCnGrbKEtzik/kfnjNtYu4pcvqzL2xo3ZVpRWTeJcntNRYv4ely+siXdPME1/dhV/R+m6d5UhLfFNfKSODWvdQ636IpLH39LrRd617qHW/RFLY+/pdaPVHqX8TVqv8AlY8YeKNsznnplGDcZVYKS/fajo8fMxVt/iKnURqNJVHhli1e/nZU4zgk8vG3Pc+41n26j76n8bKnWPSadSnFQnCTxZRe0zQJULaMZKWdxWbrXqtxRlScIpS7smk1a0mnThOM5wi3KLWN5q5lxHTaLajGtBt/vtZgztsff0+oVLeLzLJs0/W6tKNO3UFjKWdva+Jtj4T0yjB4ZVKalHPbtR0ePmYu3PxFTqIlGkqjwyx6tfSsqUZwSeXjbwfcW+sWk0p0lGE4SeO+6L23HuqncqdSMuajVTuVOpEmrBQpYRX9PvJXepxqySTw1s9i9pczkoq9tRis29iR8ft9H3sPjPLV3FXkzCGmhQVRZbOtq2rVLKpGEYp5Wdue/BvPt1H3sPjMnbk4yrzlF3xeC5rJ/dRXgl0qCpyymVrUtXqXtJU5RSw87M9zXmfoUMo9EPQzWtu9h/H9WaWGUeiHoZvWzeU/4/qyJbdb8yz69+gfGPiUIAOiUMsLE38OZtfHzMVYu/hzNq8/M5930lwLp6MdRP3vJGItnf1Oo69W9JwVcDf3aiw/8vA5LZ39TqOWE3FqSzTvRM5PKhj2FYVd0Lx1V/rJv67fofoKdz5MxNraL2NWUV3b/u8mbDRq6qwjNZSjf5+J8NN0CNWpTqP/AE28a4rNfMg0KnNyef7guOr2XrtCLp7000/Y9/02/AlZui9jSjT8e9Pmzm1h0rs6OFd6rs8vEtFt8zH29pXa1nd3YfcXlmzNGLqVMviedWrRs7Lm6ezK5K4dv08SqAB0ShgAAHXDJckBDJckADmqZvmyJKpm+bIgAAAw9xu7M3VPoOk5bM3VPoPtKrdKMP1qpdzW3/JyJL8zPqNGSjRg33RXzwkU+tOjXxhVWcXgfLw+ZYWP+HpcvrI++lUFVpyg/wA0LuT8GfGyU1QpX5pO/wAmz25cqkl3PyIULbm9RlUW6cPqmvLBX617qHW/RFJY+/pdaLvWvdQ636IpLH39LrRKo9Q/iV3VP8rHjDxRt/HzM/aNh1a1WdSLhhlLZtL9jb/tIcKkoPKLXeWVG7io1c4TzseDLrVut+qP9lMz9Cituccl+Zn59LP+ybQqSnnPYVHW9PoWnI5nO3OcvPcfM7rH39LrOE7rH39PrN8ui+BybXr4e9HxRt3n5mLtz8RU6jaPPzMXbn4ip1EG06T4Fu9Jv08Pe8mVxqdVO5PmZY1Oqncn1Ik3PVs4Wgfro8H4FtpdHtISgndiV15QezM/ew/pmkk0tr2I+fbQ/XD+yDCrOCxEt15p9rcyUqy2pY34MraNjy0eGN1Ivalcr0VJrNZZxdFXST+/4GUOhQnKUcyKVrNtSt67hR3clPfnf7T9Ap5R6Iehm9bd7D+P6s0sMo9EPQzWtu9h/H9WQ7brfmWrXv0D4x8SiAB0ShlhYm/hzNq8/MxVib+HM2rz8zn3fSXAunox1E/e8kYi2d/U6jhO62d/U6jhJ0eiuBUbnrp+8/Fmp1X0q+MqT70fvx5fm+fqXZj9X8fbxw/vj6fE2DOfcxSqcS76BXdW0Sf+rx8Oz5bjltTSuxpSqePdh1MwyNFrXOV8I/kwt/8APxM8SraOIZ7yvekFw6t24dkNnz2t/wB7iIAJBwwAADrhkuSAhkuSABzVM3zZElUzfNkQAAAYe43dmbqn0HDrDW7J0Jr8k5Py2XnbZm6p9BWa2d2nzfojm0l/y44l/wBRk46a5R3pRfgXsXfc1k9q5M8jFLYstvz2/Ur9X9J7Sik396F8PJ5fIsTVKPJbidK2rxr0oVV2r/36lJrXuodb9EUlj7+l1ou9a91Drfoiksff0utE2j1D+JUNU/yseMPFG38fMxVtv/2KvUbTx8zHWxTlLSKuGLf3+DNVp0nwOp6SpuhBL93kyuPDpWg1nlTn8LXqNI0OrTWKcHFX3XviTsrvKdzM0uVyXjgzlO6x9/T6ziO2x9/S6zEui+Bstevh70fFG3efmYu3PxFTqNo8/MxdufiKnUQrTpPgW70m/Tw97yZXGp1U7k+pGXNRqn3J9RIuerZwdB/XR4PwLK1NxV5Mwhu7V3FXkzCHi06LJnpOk68Pd8wengJaKy9zP0KGUeiHoZvWzeU/4/qzSQyj0Q9Cl1hs+rWnGVON8VC57fG85dvJKpl+0+g61TnUsXGCbeY7FxMuCwlZGkLOm/K4+NbQ6tNXzhJLi1sOipxe5lGlb1YrMoNfBn2sXfw5m1efmYqxd/DmbXx8yDd9JcC3ejHUT97yRiLZ39TqOE7rZ39TqOejTdSUYLOTSXmTo9FcCpXCbrTS/c/Fmi1Y0XDF12tsvuQ/ZLP5l4Qo0VTjGnHKFyX+T5T0uMa0KDW2UW/8L1OZOTqSbX9R9CtKULK3hTk8bk/el/JzW/o3a0G/zQ/8nk7r/kY0/Q/G55NtPkYbT9G7GpKn+l/LwJVpPY49xXfSW2xUjXXbsfFbvmvA5AASysAAAHXDJckBDJckADmqZvmyJKpm+bIgAAAw9xurM3VPoKzWzuU+b9EWlmxfYU9j7i8Cr1raw01fe736I51Lrvn5l91TZpjT/bHyOTVjScNR03lUWzqW1fK81BgtHqunOM1nFpo1k7f0ZPvSfKHyNlxSbknFEHQtRpU6DpVpJcl5WXjY/wCTl1r3UOt+iKWx9/S60d1t2rT0iMYwUlhlJu/ZmVeh1+ynGpdfhd92V5tpQapcl+05eo3NKpqCqwlmKcdq9mMm7Z7e/C/+zM1NZan5adNeTf8Ag+MtYtIeWBcoR+pG9VqewsUvSGyW7lP4ffBrL3xf9lPrXf2Mc++ymlbukP8APdyjFHPpWnVayuqTcknek7szZStpRkpPGw51/r1G4t5UoRlmSxtx9zkO2xvxFPqRwk4yad6dz/YmNZWCsUp83UjPuafyZ+huLvyefAxNufiKnUcvbz/XL+2Rbb2t3v8As0UaHNvOTsaprEb2nGChjDzvz2Y7iBqNVO5PqMuST/8ArjbUhy48k59hd+q11VxnGdm7ebi1dzU7uT4mEJHh5pUubTWTdqWoeuzjPk4wsb8nh6eA2nMayj9Dpxd0dj7sPD9iWF8GYFaRU/XL4mTjp1ZZVJfEyD6o+8uK9JqaWObfzRu9v7/MrtYW/s1TPvQ9YmajamkL/Vl8mK9p1qkXCc74u69XLw2mYW0oyTya7n0hpVqE6XIknKLXZ2rB7Ym/hzNp4+Zg9HrypSU496O1X7UWsNZa1+2FN8019T3cUZTeUR9E1S3tKcoVc7XndnsOC2d/U6ix1X0TFJ1nlT2R6nkyp0yv2s5VGrnJ33LbcXFm21So0403Tler75K53t+JsqKXN4W8g2E7f13na0sRTclntednjk0l6W15J3vkYjSdOlOq6672K+P7JZFvaduQqUnClixz2SvWxR4GbNdtSccuSJuvajCtKEKMsqO3K7+z4pH6DCopxU13Z7V5lDrVovdrLonzWTOjVvTE6bpyaTg9l7zi77/mWWnaN21KUFfe4q7mtqI0f+KrtO5V5Oo6fs6TWf8Asv5XyMCCcldseaIHTKAAAAdcMlyQEMlyQAOapm+bIkqmb5siAAAAfd6RO67HK7K7E7rj5MiAZcm97AABgAAAAAAAAAAAAAAAHp4AAAAAAAAAAAAAAAAAAAAAACR9IVpxylJcpNHxAMptbUfSUm3e9ref7nzABgAAA64ZLkgIZLkgAc1TN82RJVM3zZEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA64ZLkgIZLkgAc1TN82RPpOO182eYACAJ4BgAIAngGAAgCeAYACAJ4BgAIAngGAAgCeAYACAJ4BgAIAngGAAgCeAYACAJ4BgAIAngGAAgCeAYACAJ4BgAIAngGAAgCeAYACAJ4BgAIAngGAAgCeAYACAJ4BgAOiGS5IHsFsXJAA//9k=" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KIDS</span>
                    <Notifications className="icon"/>
                    <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
