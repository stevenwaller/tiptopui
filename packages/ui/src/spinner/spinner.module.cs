.spinner,
.spinner > div {
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.spinner {
  display: block;
  font-size: 0;
}

.spinner--light {
  color: #fff;
}

.spinner--dark {
  color: #333;
}

.spinner > div {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: 0 solid currentColor;
}

.spinner {
  width: 32px;
  height: 32px;
}

.spinner > div {
  width: 32px;
  height: 32px;
  background: transparent;
  border-width: 2px;
  border-bottom-color: transparent;
  border-radius: 100%;
  -webkit-animation: spinner-rotate 0.75s linear infinite;
  -moz-animation: spinner-rotate 0.75s linear infinite;
  -o-animation: spinner-rotate 0.75s linear infinite;
  animation: spinner-rotate 0.75s linear infinite;
}

.spinner--small {
  width: 16px;
  height: 16px;
}

.spinner--small > div {
  width: 16px;
  height: 16px;
  border-width: 1px;
}

.spinner--large {
  width: 64px;
  height: 64px;
}

.spinner--large > div {
  width: 64px;
  height: 64px;
  border-width: 4px;
}

.spinner--extra-large {
  width: 96px;
  height: 96px;
}

.spinner--extra-large > div {
  width: 96px;
  height: 96px;
  border-width: 6px;
}

/*
* Animation
*/
@-webkit-keyframes spinner-rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner-rotate {
  0% {
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -moz-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -moz-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner-rotate {
  0% {
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner-rotate {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
