<div>
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
  <span />
</div>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  div {
    position: relative;
    margin-left: 92px;
  }
  div span {
    position: absolute;
    width: 6px;
    height: 90px;
    margin-top: -45px;
    border-radius: 10px;
    background-color: #ffffff;
    animation: animate 0.8s infinite;
    animation-direction: alternate-reverse;
  }
  div span:nth-child(1) {
    margin-left: 0px;
  }
  div span:nth-child(2) {
    margin-left: -14px;
    animation-delay: 0.1s;
  }
  div span:nth-child(3) {
    margin-left: -28px;
    animation-delay: 0.2s;
  }
  div span:nth-child(4) {
    margin-left: -42px;
    animation-delay: 0.3s;
  }
  div span:nth-child(5) {
    margin-left: -56px;
    animation-delay: 0.4s;
  }
  div span:nth-child(6) {
    margin-left: -70px;
    animation-delay: 0.5s;
  }
  div span:nth-child(7) {
    margin-left: -84px;
    animation-delay: 0.6s;
  }
  div span:nth-child(8) {
    margin-left: -98px;
    animation-delay: 0.7s;
  }
  @keyframes animate {
    0% {
      height: 5px;
      margin-top: 0;
      transform: rotate(40deg);
    }
    100% {
      height: 90px;
      transform: rotate(0deg);
    }
  }
</style>
