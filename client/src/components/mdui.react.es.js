/*!
* @taroui/muilty-packages v1.0 Fri Feb 10 2023 23:10:35 GMT+0800 (中国标准时间)
* (c) 2022 @jdf2e.
* Released under the MIT License.
*/
import React, { useCallback, useState, useEffect, useRef, useContext, useMemo } from "react";
import { $ } from "@tarojs/extend";
import Taro from "@tarojs/taro";
const defaultProps$k = {
  className: "",
  block: false,
  disabled: false,
  size: "normal",
  raised: false,
  icon: "",
  style: {},
  children: void 0,
  onClick: (e) => {
  }
};
const Button = (props) => {
  const {
    disabled,
    color,
    size,
    raised,
    block,
    active,
    icon,
    children,
    onClick,
    className,
    style,
    ...rest
  } = {
    ...defaultProps$k,
    ...props
  };
  const classes = useCallback(() => {
    const prefixCls = "mdui-btn";
    const accent = icon || color == "opacity" ? "" : "mdui-color-theme-accent";
    return [
      prefixCls,
      "mdui-ripple",
      `${size == "small" ? `${prefixCls}-dense` : ""}`,
      `${color && color != "opacity" ? `mdui-color-${color}` : accent}`,
      `${icon ? `${prefixCls}-icon` : ""}`,
      `${block ? `${prefixCls}-block` : ""}`,
      `${raised ? `${prefixCls}-raised` : ""}`,
      `${active !== void 0 ? `${prefixCls}-active` : ""}`
    ].filter(Boolean).join(" ");
  }, [disabled, size, color, icon, block, raised, active]);
  const [btnName, setBtnName] = useState(classes());
  useEffect(() => {
    setBtnName(classes());
  }, [
    className,
    disabled,
    style,
    size,
    icon,
    children,
    onClick,
    classes
  ]);
  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };
  return /* @__PURE__ */ React.createElement("button", {
    disabled,
    className: `${btnName} ${className}`,
    style: { ...style },
    onClick: (e) => handleClick(e)
  }, icon && /* @__PURE__ */ React.createElement("div", {
    className: "mdui-icon material-icons"
  }, icon), children);
};
Button.defaultProps = defaultProps$k;
Button.displayName = "MdButton";
const defaultProps$j = {
  type: "circle",
  colorful: false
};
const Spinner = (props) => {
  const { children, percent, type, colorful } = { ...defaultProps$j, ...props };
  const [percentStyle, setPercentStyle] = useState({});
  useEffect(() => {
    if (typeof percent == "string") {
      setPercentStyle({ width: `${percent}` });
    } else if (typeof percent == "number") {
      setPercentStyle({ width: `${percent * 100}%` });
    }
  });
  const circleView = () => {
    return /* @__PURE__ */ React.createElement("div", {
      className: `mdui-spinner ${colorful ? "mdui-spinner-colorful" : ""}`
    }, !colorful ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
      className: "mdui-spinner-layer "
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mdui-spinner-circle-clipper mdui-spinner-left"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mdui-spinner-circle"
    })), /* @__PURE__ */ React.createElement("div", {
      className: "mdui-spinner-gap-patch"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mdui-spinner-circle"
    })), /* @__PURE__ */ React.createElement("div", {
      className: "mdui-spinner-circle-clipper mdui-spinner-right"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mdui-spinner-circle"
    })))) : /* @__PURE__ */ React.createElement(React.Fragment, null, [1, 2, 3, 4].map(
      (val, idx) => /* @__PURE__ */ React.createElement("div", {
        key: `spinner-${idx}`,
        className: `mdui-spinner-layer mdui-spinner-layer-${val}`
      }, /* @__PURE__ */ React.createElement("div", {
        className: "mdui-spinner-circle-clipper mdui-spinner-left"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "mdui-spinner-circle"
      })), /* @__PURE__ */ React.createElement("div", {
        className: "mdui-spinner-gap-patch"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "mdui-spinner-circle"
      })), /* @__PURE__ */ React.createElement("div", {
        className: "mdui-spinner-circle-clipper mdui-spinner-right"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "mdui-spinner-circle"
      })))
    )));
  };
  const progressView = () => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "mdui-progress"
    }, /* @__PURE__ */ React.createElement("div", {
      className: `${percent != void 0 ? "mdui-progress-determinate" : "mdui-progress-indeterminate"}`,
      style: percentStyle
    }));
  };
  return /* @__PURE__ */ React.createElement("div", null, type == "circle" ? circleView() : progressView());
};
Spinner.defaultProps = defaultProps$j;
Spinner.displayName = "MDUI-Spinner";
const defaultProps$i = {
  icons: [],
  actions: [],
  mini: false
};
const Fab = (props) => {
  const { children, icons, actions, mini, color } = { ...defaultProps$i, ...props };
  const [state, setState] = useState("closed");
  const handleClick = () => {
    if (state == "closed") {
      open();
    } else if (state == "opened") {
      close();
    }
  };
  const open = () => {
    if (state != "closed") {
      return;
    }
    setTimeout(() => {
      setState("opened");
    }, 50 * actions.length + 1);
    setState("openning");
  };
  const close = () => {
    if (state != "opened") {
      return;
    }
    setState("closing");
    setTimeout(() => {
      setState("closed");
    }, 50 * actions.length + 1);
  };
  const transDelay = (index) => {
    if (!actions || actions.length == 0)
      return;
    const delay = state == "openning" ? `${50 * (actions.length - index)}ms` : `${50 * index}ms`;
    return {
      transitionDelay: delay,
      webkitTransitionDelay: delay
    };
  };
  const getBtnIcon = (idx) => {
    if (typeof icons == "string") {
      return icons;
    } else
      return icons[idx];
  };
  const actionStyle = (opt) => {
    return `mdui-fab mdui-fab-mini mdui-ripple ${opt.color ? `mdui-color-${opt.color}` : ""} ${state != "opened" ? "mdui-fab-opened" : ""}`;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "mdui-fab-wrapper",
    id: "exampleFab"
  }, /* @__PURE__ */ React.createElement("button", {
    className: `mdui-fab mdui-ripple mdui-color-theme-accent ${state != "closed" ? "mdui-fab-opened" : ""}`,
    onClick: handleClick
  }, /* @__PURE__ */ React.createElement("i", {
    className: "mdui-icon material-icons"
  }, getBtnIcon(0)), /* @__PURE__ */ React.createElement("i", {
    className: "mdui-icon mdui-fab-opened material-icons"
  }, getBtnIcon(1))), /* @__PURE__ */ React.createElement("div", {
    className: `mdui-fab-dial ${state.indexOf("open") >= 0 ? "mdui-fab-dial-show" : ""}`,
    style: { height: `${state != "closed" ? "auto" : "0"}` }
  }, actions == null ? void 0 : actions.map(
    (opt, idx) => /* @__PURE__ */ React.createElement("button", {
      className: actionStyle(opt),
      style: transDelay(idx)
    }, /* @__PURE__ */ React.createElement("i", {
      className: "mdui-icon material-icons"
    }, opt.icon || opt))
  )));
};
Fab.defaultProps = defaultProps$i;
Fab.displayName = "MDUI-Fab";
const defaultProps$h = { column: 1, screen: "all" };
const Grid = (props) => {
  const { children, fluid, gapless, column, className, customStyle } = { ...defaultProps$h, ...props };
  const rowClass = () => {
    return ` mdui-row mdui-grid-list mdui-row-xs-${column} ${gapless ? "mdui-row-gapless " : ""}`;
  };
  const cloneChildren = () => {
    React.Children.count(children);
    return React.Children.map(children, (child) => {
      const cls = child.props.className;
      console.log(cls);
      return /* @__PURE__ */ React.createElement("div", {
        className: "mdui-col"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "mdui-grid-tile"
      }, React.cloneElement(child)));
    });
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: `${fluid ? "mdui-container-fluid" : "mdui-container"} ${className}`,
    style: customStyle
  }, /* @__PURE__ */ React.createElement("div", {
    className: rowClass()
  }, cloneChildren()));
};
Grid.defaultProps = defaultProps$h;
Grid.displayName = "MDUI-Grid";
function isString(target) {
  return typeof target === "string";
}
function isNumber(target) {
  return typeof target === "number";
}
function isNull(target) {
  return target === null;
}
function isObject(target) {
  return typeof target === "object" && target !== null && !Array.isArray(target);
}
function isImage(target) {
  return (target == null ? void 0 : target.match("(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga|JPG|BMP|GIF|ICO|PCX|JPEG|TIF|PNG|RAW|TGA)$")) != null;
}
function uuid(len = 8, radix = 16) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  const value = [];
  let i = 0;
  radix = radix || chars.length;
  if (len) {
    for (i = 0; i < len; i++)
      value[i] = chars[0 | Math.random() * radix];
  } else {
    let r;
    value[8] = value[13] = value[18] = value[23] = "-";
    value[14] = "4";
    for (i = 0; i < 36; i++) {
      if (!value[i]) {
        r = 0 | Math.random() * 16;
        value[i] = chars[i === 19 ? r & 3 | 8 : r];
      }
    }
  }
  return value.join("");
}
function registerPageScroll(page, scrollFunction) {
  let onPageScroll = (e) => {
    scrollFunction(e);
  };
  const prevOnPageScroll = page.onPageScroll ? page.onPageScroll.bind(page) : (e) => console.log("root scroll:", e);
  page.onPageScroll = (e) => {
    prevOnPageScroll(e);
    onPageScroll(e);
  };
}
const throttle = function(fn, delay = 16) {
  let timer = null;
  return function(...args) {
    if (isNull(timer)) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    }
  };
};
const defaultProps$g = {
  fixed: false,
  transparent: false
};
const AppBar = (props) => {
  const { children, transparent, fixed, autoHide } = { ...defaultProps$g, ...props };
  const [state, setState] = useState("");
  const [hasToolbar, setWithToolbar] = useState(false);
  let lastScrollTop = 0;
  useEffect(() => {
    const isWeb = Taro.getEnv() == "WEB";
    const page = Taro.getCurrentInstance().page;
    React.Children.forEach(children, (child, idx) => {
      const name = child.type.displayName;
      let withToolbar = false, withTab = false, withLargeTab = false;
      if (name == "MDUI-Toolbar") {
        withToolbar = true;
        setWithToolbar(true);
      } else if (name == "MDUI-Tab") {
        if (child.props.options[0].icon != void 0) {
          withLargeTab = true;
        } else {
          withTab = true;
        }
      }
      const bodyCls = `${withToolbar ? "mdui-appbar-with-toolbar " : ""}${withLargeTab ? ".mdui-appbar-with-tab-larger " : ""}${withTab ? "mdui-appbar-with-tab " : ""}`;
      if (isWeb) {
        $("body").addClass(bodyCls);
      } else {
        const pages = $("root");
        pages.forEach((p) => {
          if (p.ctx.route == (page == null ? void 0 : page.route)) {
            $(p.childNodes[0]).addClass(bodyCls);
            return;
          }
        });
      }
    });
    if (autoHide) {
      registerPageScroll(page, onPageScroll);
    }
  }, [children, autoHide]);
  const onPageScroll = (e) => {
    const currentScrollY = e.scrollTop;
    const scrolled = Math.abs(currentScrollY - lastScrollTop);
    const toleranceExceeded = scrolled >= 5;
    if (currentScrollY > lastScrollTop && toleranceExceeded) {
      if (state === "unpinning" || state === "unpinned") {
        return;
      }
      setState("unpinning");
    } else if (currentScrollY < lastScrollTop && toleranceExceeded) {
      if (state === "pinning" || state === "pinned") {
        return;
      }
      setState("pinning");
    }
    lastScrollTop = currentScrollY;
  };
  const transitionEnd = () => {
    if (state === "pinning") {
      setState("pinned");
    }
    if (state === "unpinning") {
      setState("unpinned");
    }
  };
  const getClass = () => {
    return `mdui-appbar ${transparent ? "mdui-shadow-0 " : ""}${fixed ? "mdui-appbar-fixed " : ""}${state == "pinning" || state == "pinned" ? "mdui-headroom-pinned-toolbar " : ""} ${state == "unpinning" || state == "unpinned" ? "mdui-headroom-unpinned-toolbar " : ""} ${autoHide ? hasToolbar ? "mdui-appbar-scroll-toolbar-hide mdui-headroom " : "mdui-appbar-scroll-hide mdui-headroom " : ""}`;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: getClass(),
    onTransitionEnd: transitionEnd
  }, children);
};
AppBar.defaultProps = defaultProps$g;
AppBar.displayName = "MDUI-AppBar";
const defaultProps$f = {
  header: "",
  color: "theme",
  center: false,
  icons: []
};
const Toolbar = (props) => {
  const { children, header, title, subtitle, center, icons, color, onIconClick, onHeaderClick } = { ...defaultProps$f, ...props };
  const handleHeaderClick = (e) => {
    onHeaderClick && onHeaderClick(e);
  };
  const handleIconClick = (icon, idx) => {
    onIconClick && onIconClick(icon, idx);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: `mdui-toolbar mdui-color-${color}`
  }, header && /* @__PURE__ */ React.createElement("a", {
    href: "javascript:;",
    className: "mdui-btn mdui-btn-icon",
    onClick: handleHeaderClick
  }, /* @__PURE__ */ React.createElement("i", {
    className: "mdui-icon material-icons"
  }, header)), center && /* @__PURE__ */ React.createElement("div", {
    className: "mdui-toolbar-spacer"
  }), title != void 0 && /* @__PURE__ */ React.createElement("a", {
    className: "mdui-typo-headline"
  }, title), subtitle != void 0 && /* @__PURE__ */ React.createElement("a", {
    className: "mdui-typo-title"
  }, subtitle), /* @__PURE__ */ React.createElement("div", {
    className: "mdui-toolbar-spacer"
  }), icons == null ? void 0 : icons.map((icon, idx) => /* @__PURE__ */ React.createElement("a", {
    href: "javascript:;",
    className: "mdui-btn mdui-btn-icon",
    onClick: () => handleIconClick(icon, idx)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "mdui-icon material-icons"
  }, icon))));
};
Toolbar.defaultProps = defaultProps$f;
Toolbar.displayName = "MDUI-Toolbar";
const defaultProps$e = {
  options: [],
  activeIdx: -1,
  color: "",
  textColor: "",
  hideText: false,
  fixed: false,
  autoHide: true,
  offset: 0
};
const NavBar = (props) => {
  const { options, activeIdx, color, textColor, hideText, fixed, autoHide, offset } = { ...defaultProps$e, ...props };
  const page = Taro.getCurrentInstance().page;
  const [actived, setActived] = useState(activeIdx);
  const [contentColor, setContentColor] = useState("");
  const [lastScrollTop, setScrollTop] = useState(0);
  const [pinState, setPinState] = useState("");
  useEffect(() => {
    if (!textColor && color) {
      let alpha = color.match(/\d+/);
      if (!alpha || parseInt(alpha[0]) > 500) {
        setContentColor("mdui-text-color-white");
      }
    } else {
      setContentColor(textColor || "");
    }
    autoHide && registerPageScroll(page, onPageScroll);
  }, [fixed, color, textColor]);
  const getClass = () => {
    const cls = contentColor + ` mdui-bottom-nav mdui-headroom ${color ? ` mdui-color-${color}` : ""}${hideText ? " mdui-bottom-nav-text-auto" : ""} ${pinState == "pinning" || pinState == "pinned" ? "mdui-headroom-pinned-down" : ""} ${pinState == "unpinning" || pinState == "unpinned" ? "mdui-headroom-unpinned-down" : ""} `;
    return cls;
  };
  const onPageScroll = (e) => {
    console.log("navbar:scroll:", e);
    const currentScrollY = e.scrollTop;
    const scrolled = Math.abs(currentScrollY - lastScrollTop);
    const toleranceExceeded = scrolled >= 5;
    if (currentScrollY > lastScrollTop && currentScrollY >= offset && toleranceExceeded) {
      if (pinState === "unpinning" || pinState === "unpinned") {
        return;
      }
      setScrollTop(currentScrollY);
      setPinState("unpinning");
    } else if (currentScrollY < lastScrollTop && toleranceExceeded || currentScrollY <= offset) {
      setScrollTop(currentScrollY);
      if (pinState === "pinning" || pinState === "pinned") {
        return;
      }
      setPinState("pinning");
    }
  };
  const transitionEnd = () => {
    if (pinState === "pinning") {
      setPinState("pinned");
    }
    if (pinState === "unpinning") {
      setPinState("unpinned");
    }
  };
  const handleClick = (idx) => {
    setActived(idx);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: getClass(),
    onTransitionEnd: transitionEnd
  }, options.map(
    (opt, idx) => /* @__PURE__ */ React.createElement("a", {
      href: "javascript:void(0);",
      className: `mdui-bottom-nav-btn mdui-ripple-white mdui-ripple ${actived == idx ? "mdui-bottom-nav-active" : ""}`,
      onClick: () => handleClick(idx)
    }, /* @__PURE__ */ React.createElement("i", {
      className: "mdui-icon material-icons"
    }, opt.icon), opt.title != void 0 && /* @__PURE__ */ React.createElement("label", {
      className: "mdui-bottom-nav-label"
    }, opt.title))
  ));
};
NavBar.defaultProps = defaultProps$e;
NavBar.displayName = "MDUI-NavBar";
const defaultProps$d = {
  options: [],
  scrollable: false,
  center: false,
  color: "",
  contentClass: "mdui-p-a-2"
};
const Tab = (props) => {
  const { children, options, color, fullWidth, center, scrollable, disabledIdx, contentClass } = { ...defaultProps$d, ...props };
  const [activeIdx, setActiveIdx] = useState(-1);
  const [tabsOffsets, setOffsets] = useState();
  const [rootOffset, setRootOffset] = useState();
  const [rootScrollLeft, setRootScrollLeft] = useState();
  const [indicatorStyle, setStyle] = useState();
  const isWeb = Taro.getEnv() == "WEB";
  const id2 = uuid();
  const handleClick = (idx) => {
    disabledIdx != idx && setActiveIdx(idx);
    if (!tabsOffsets) {
      getRootRect();
    }
  };
  const getRootRect = async () => {
    let $root = $(`#${id2}`);
    const left = await $root.scrollLeft();
    const offset = await $root.offset();
    setRootOffset(offset);
    setRootScrollLeft(left);
    const offsets = [];
    let $tabs = $root.children("a");
    for (let i = 0; i < $tabs.length; i++) {
      let of = await $($tabs[i]).offset();
      offsets.push(of);
    }
    if (offsets.length == 0) {
      return;
    }
    setOffsets(offsets);
  };
  useEffect(() => {
    setTimeout(() => {
      getRootRect();
    }, 400);
    if (isWeb) {
      $(window).on(
        "resize",
        throttle(() => {
          setOffsets(null);
          setStyle({ ...indicatorStyle, opacity: 0 });
          getRootRect();
        }, 500)
      );
    }
  }, [options]);
  useEffect(() => {
    if (!tabsOffsets || tabsOffsets.length == 0)
      return;
    let $root = $(`#${id2}`);
    let $tabs = $root.children("a");
    let $activeTab = $tabs[activeIdx];
    let activeTabOffset = tabsOffsets[activeIdx];
    if (!$activeTab)
      return;
    let style = {
      left: `${activeTabOffset.left + rootScrollLeft - rootOffset.left}PX`,
      width: `${activeTabOffset.width}PX`,
      opacity: "1"
    };
    setStyle(style);
  }, [activeIdx, tabsOffsets]);
  const getClass = () => {
    const prefixCls = "mdui-tab";
    return [
      prefixCls,
      `${scrollable ? `${prefixCls}-scrollable` : ""}`,
      `${color ? `mdui-color-${color}` : ""}`,
      `${center ? `${prefixCls}-centered` : ""}`,
      `${fullWidth ? `${prefixCls}-full-width` : ""}`
    ].filter(Boolean).join(" ");
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: id2,
    className: getClass()
  }, options.map((opt, idx) => {
    return /* @__PURE__ */ React.createElement(React.Fragment, {
      key: idx
    }, /* @__PURE__ */ React.createElement("a", {
      href: `${opt.href ? `#${opt.href}` : `#tab-content-${idx}`}`,
      className: `${idx == activeIdx ? "mdui-tab-active" : ""} ${disabledIdx == idx ? "mdui-tab-disabled" : ""}`,
      onClick: () => {
        handleClick(idx);
      }
    }, opt.icon && /* @__PURE__ */ React.createElement("i", {
      className: "mdui-icon material-icons"
    }, opt.icon), opt.title && /* @__PURE__ */ React.createElement("label", {
      className: "mdui-tab-label"
    }, opt.title)));
  }), /* @__PURE__ */ React.createElement("div", {
    id: `indicator-${id2}`,
    className: "mdui-tab-indicator",
    style: indicatorStyle
  })), options.map(
    (opt, idx) => opt.content != void 0 && /* @__PURE__ */ React.createElement("div", {
      id: `tab-content-${idx}`,
      className: contentClass,
      style: activeIdx != idx ? { display: "none" } : {},
      key: idx
    }, opt.content)
  ), children);
};
Tab.defaultProps = defaultProps$d;
Tab.displayName = "MDUI-Tab";
const defaultProps$c = {
  value: 0,
  min: 0,
  max: 10,
  step: 0.1,
  disabled: false
};
const Slider = (props) => {
  const { onChange, value, min, max, disabled, discrete, step } = { ...defaultProps$c, ...props };
  const [focus, setfocus] = useState(false);
  const [stValue, setStateValue] = useState(value);
  const [rect, setRect] = useState(null);
  const [percent, setPercent] = useState((value - min) / (max - min) * 100);
  const [unfocusTimer, setUnfocusTimer] = useState(-1);
  const [mouseSt, setMouse] = useState("up");
  const sliderRef = useRef(null);
  const isWeb = Taro.getEnv() == "WEB";
  const onSliderTouchStart = (e) => {
    if (disabled)
      return;
    unfocusTimer && clearTimeout(unfocusTimer);
    setMouse("down");
    updatePercent(e);
  };
  const onSliderTouchMove = (e) => {
    if (mouseSt == "down" || !isWeb && !disabled) {
      updatePercent(e);
    }
  };
  const updatePercent = (e) => {
    let percent2 = 0;
    if (isWeb) {
      const v = e.pageX - rect.left;
      percent2 = v / rect.width;
    } else {
      const px = e.touches[0].pageX;
      percent2 = (px - rect.left) / rect.width;
    }
    const stepVal = stepValue(percent2);
    if (stepVal != stValue) {
      setPercent(stepVal / (max - min) * 100);
      setStateValue(stepVal);
      onChange && onChange(stepVal);
    }
    setfocus(true);
  };
  const onSliderTouchEnd = () => {
    if (mouseSt != "down" || disabled)
      return;
    setMouse("up");
    const timer = setTimeout(() => setfocus(false), 500);
    setUnfocusTimer(timer);
  };
  const stepValue = (value2) => {
    let realVal = min + value2 * (max - min);
    value2 = Math.max(+min, Math.min(realVal, +max));
    return Math.round(value2 / +step) * +step;
  };
  const classes = useCallback(() => {
    const percent2 = (stValue - min) / (max - min) * 100;
    const prefixCls = "mdui-slider";
    return [
      prefixCls,
      `${focus ? `${prefixCls}-focus` : ""}`,
      `${disabled ? `${prefixCls}-disabled` : ""}`,
      `${discrete ? `${prefixCls}-discrete` : ""}`,
      `${percent2 === 0 ? `${prefixCls}-zero` : ""}`
    ].filter(Boolean).join(" ");
  }, [focus, percent, stValue, disabled, discrete]);
  const [sliderClass, setClass] = useState(classes());
  useEffect(() => {
    const cls = classes();
    setClass(cls);
  }, [
    classes,
    value,
    stValue,
    min,
    max,
    disabled,
    discrete
  ]);
  useEffect(() => {
    const ref = sliderRef.current;
    if (isWeb) {
      const width = ref.clientWidth;
      const height = ref.clientHeight;
      const res = {
        top: ref.offsetTop,
        left: ref.offsetLeft,
        width,
        height
      };
      setRect(res);
    } else {
      setTimeout(() => {
        ref.getBoundingClientRect().then((res) => {
          setRect(res);
        }).catch((e) => {
          console.log(e);
        });
      });
    }
  }, [min, max]);
  const spanSty = () => {
    return { top: isWeb ? "7PX" : "8PX" };
  };
  return /* @__PURE__ */ React.createElement("div", {
    id: "Slider",
    ref: sliderRef,
    className: sliderClass,
    onTouchStart: onSliderTouchStart,
    onTouchMove: onSliderTouchMove,
    onTouchEnd: onSliderTouchEnd,
    onMouseDown: onSliderTouchStart,
    onMouseUp: onSliderTouchEnd,
    onMouseMove: onSliderTouchMove,
    onMouseOver: () => setfocus(true)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mdui-slider-track",
    style: { width: `${100 - percent}%` }
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mdui-slider-fill",
    style: { width: `${percent}%` }
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mdui-slider-thumb",
    style: { left: `${percent}%` }
  }, discrete && /* @__PURE__ */ React.createElement("span", {
    style: spanSty()
  }, stValue)));
};
Slider.defaultProps = defaultProps$c;
Slider.displayName = "MDUI-Ranger";
Taro.getEnv() == "WEAPP";
const defaultProps$b = {};
const TextField = (props) => {
  const { label, labelFloat, disabled, value, multiline, info, icon, maxLength, expandable } = { ...defaultProps$b, ...props };
  const [focus, setFocus] = useState();
  useState();
  const [inputValue, setValue] = useState(value || "");
  const [inputHeight, setInputHeight] = useState();
  const inputId = uuid();
  const getInputClass = () => {
    return `mdui-textfield ${labelFloat && !disabled ? "mdui-textfield-floating-label " : ""} ${focus ? "mdui-textfield-focus " : ""}${disabled ? "mdui-textfield-disabled " : ""}${inputValue ? "mdui-textfield-not-empty " : ""}${info || maxLength ? "mdui-textfield-has-bottom " : ""}`;
  };
  const eventProps = () => {
    return {
      onClick: () => !disabled && setFocus(true),
      onBlur: () => !disabled && setFocus(false),
      onInput: handleInput
    };
  };
  const handleInput = async (e) => {
    setValue(e.target.value);
    const val = e.target.value;
    if (multiline) {
      const len = val.split("\n").length - 1;
      setInputHeight(36 + 20 * len);
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: getInputClass()
  }, icon && /* @__PURE__ */ React.createElement("i", {
    className: "mdui-icon material-icons"
  }, icon), label && /* @__PURE__ */ React.createElement("label", {
    className: "mdui-textfield-label"
  }, label), multiline ? /* @__PURE__ */ React.createElement("textarea", {
    id: inputId,
    className: "mdui-textfield-input",
    multiple: true,
    ...eventProps(),
    style: inputHeight ? { height: inputHeight + "px" } : {}
  }) : /* @__PURE__ */ React.createElement("input", {
    id: inputId,
    className: "mdui-textfield-input mdui-textfield-invalid",
    type: "email",
    disabled,
    maxlength: maxLength,
    ...eventProps()
  }), maxLength && /* @__PURE__ */ React.createElement("div", {
    className: "mdui-textfield-counter"
  }, /* @__PURE__ */ React.createElement("span", null, inputValue.length, " / ", maxLength), " "), info && /* @__PURE__ */ React.createElement("div", {
    className: "mdui-textfield-helper"
  }, info));
};
TextField.defaultProps = defaultProps$b;
TextField.displayName = "MDUI-TextField";
const defaultProps$a = {};
const SearchBar = (props) => {
  const { value, expand, reverse } = { ...defaultProps$a, ...props };
  const [focus, setFocus] = useState();
  const [expanded, setExpanded] = useState();
  const [inputValue, setValue] = useState(value || "");
  const inputId = uuid();
  const getInputClass = () => {
    return `mdui-textfield mdui-textfield-expandable ${focus ? "mdui-textfield-focus " : ""}${inputValue ? "mdui-textfield-not-empty " : ""}${expanded || expand ? "mdui-textfield-expanded " : ""}${reverse ? "mdui-float-right " : ""}`;
  };
  const eventProps = () => {
    return {
      onClick: () => setFocus(true),
      onBlur: () => setFocus(false),
      onInput: handleInput
    };
  };
  const handleInput = async (e) => {
    setValue(e.target.value);
    e.target.value;
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: getInputClass()
  }, /* @__PURE__ */ React.createElement("button", {
    className: "mdui-textfield-icon mdui-btn mdui-btn-icon",
    onClick: () => setExpanded(true)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "mdui-icon material-icons"
  }, "search")), /* @__PURE__ */ React.createElement("input", {
    id: inputId,
    className: "mdui-textfield-input mdui-textfield-invalid",
    type: "text",
    ...eventProps()
  }), !expand && /* @__PURE__ */ React.createElement("button", {
    className: "mdui-textfield-close mdui-btn mdui-btn-icon",
    onClick: () => setExpanded(false)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "mdui-icon material-icons"
  }, "close")));
};
SearchBar.defaultProps = defaultProps$a;
SearchBar.displayName = "MDUI-SearchBar";
const defaultProps$9 = {
  checked: false,
  disabled: false
};
const Switch = (props) => {
  const { children, checked, disabled, value, onChange } = { ...defaultProps$9, ...props };
  const [opened, setOpened] = useState(checked);
  const [focus, setFocus] = useState(false);
  Taro.getEnv() == "WEB";
  useEffect(() => {
    setOpened(checked);
  }, [checked]);
  const handleClick = (e) => {
    e.stopPropagation();
    if (disabled) {
      return;
    }
    const st = !opened;
    setOpened(st);
    onChange && onChange(st, value);
  };
  const labelClass = () => {
    return `mdui-switch ${opened ? "mdui-switch-checked " : ""}${disabled ? "mdui-switch-disabled " : ""}`;
  };
  const iconClass = () => {
    return `mdui-switch-icon ${focus && !disabled ? "mdui-switch-focus " : ""}${focus && disabled ? "mdui-switch-focus-disabled " : ""}`;
  };
  return /* @__PURE__ */ React.createElement("label", {
    className: labelClass(),
    onClick: handleClick
  }, /* @__PURE__ */ React.createElement("div", {
    className: iconClass(),
    hoverClass: `${disabled ? "mdui-switch-focus-disabled" : "mdui-switch-focus"}`,
    onMouseOver: () => !disabled && setFocus(true),
    onMouseOut: () => !disabled && setFocus(false)
  }), children);
};
Switch.defaultProps = defaultProps$9;
Switch.displayName = "MDUI-Switch";
const defaultProps$8 = {
  disabled: false,
  indeterminate: false,
  value: ""
};
const CheckBox = (props) => {
  const { children, indeterminate, checked, disabled, value, onChange } = { ...defaultProps$8, ...props };
  const [opened, setOpened] = useState(checked || false);
  useState(false);
  const [active, setActive] = useState(false);
  const [unknown, setUnknown] = useState(indeterminate);
  Taro.getEnv() == "WEB";
  useEffect(() => {
    console.log("checkbox:efx:" + checked);
    setOpened(checked);
    indeterminate && setUnknown(true);
  }, [checked, value, indeterminate]);
  const handleClick = (e) => {
    if (disabled)
      return;
    indeterminate && setUnknown(false);
    const st = !opened;
    setOpened(st);
    console.log("checkbox:click:" + st);
    onChange && onChange(st, value);
  };
  const onTouchStart = (e) => {
    !disabled && setActive(true);
  };
  const onTouchEnd = (e) => {
    !disabled && setActive(false);
  };
  const getClass = () => {
    const prefixCls = "mdui-checkbox";
    return [
      prefixCls,
      `${opened ? `${prefixCls}-checked` : ""}`,
      `${active ? `${prefixCls}-active` : ""}`,
      `${unknown ? `${prefixCls}-unknown` : ""}`,
      `${disabled ? `${prefixCls}-disabled` : ""}`
    ].filter(Boolean).join(" ");
  };
  return /* @__PURE__ */ React.createElement("label", {
    className: getClass(),
    onClick: handleClick,
    onTouchStart,
    onTouchEnd,
    onMouseDown: onTouchStart,
    onMouseUp: onTouchEnd
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mdui-checkbox-icon"
  }), children);
};
CheckBox.defaultProps = defaultProps$8;
CheckBox.displayName = "MDUI-CheckBox";
const defaultProps$7 = {
  checked: false,
  disabled: false
};
const Radio = (props) => {
  const { children, checked, disabled, onChange, value, name } = { ...defaultProps$7, ...props };
  const [opened, setOpened] = useState(checked);
  Taro.getEnv() == "WEB";
  const [focus, setFocus] = useState(false);
  useEffect(() => {
    setOpened(checked);
  }, [checked, value]);
  const handleClick = (e) => {
    if (disabled || opened)
      return;
    setOpened(true);
    setFocus(true);
    onChange && onChange(true, value);
  };
  const getClass = () => {
    const prefixCls = "mdui-radio";
    return [
      prefixCls,
      `${opened ? `${prefixCls}-checked` : ""}`,
      `${focus ? `${prefixCls}-focus` : ""}`
    ].filter(Boolean).join(" ");
  };
  return /* @__PURE__ */ React.createElement("label", {
    className: getClass(),
    onClick: handleClick,
    onMouseOver: () => setFocus(true),
    onMouseOut: () => setFocus(false)
  }, /* @__PURE__ */ React.createElement("div", {
    className: `mdui-radio-icon ${disabled ? "mdui-radio-disabled" : "mdui-radio-active"}`,
    hoverClass: "mdui-radio-active"
  }), children);
};
Radio.defaultProps = defaultProps$7;
Radio.displayName = "MDUI-Switch";
const defaultProps$6 = {
  options: {},
  active: false,
  useIcon: false
};
const ListItem = (props) => {
  const { children, onClick, active, options, useIcon, avatarColor, iconColor, bgColor, reverse, multiline } = { ...defaultProps$6, ...props };
  const handleClick = (e) => {
    onClick && onClick(e, options);
  };
  const avatarView = () => {
    if (options.avatar == void 0)
      return;
    const avatarCol = avatarColor ? `mdui-color-${avatarColor} mdui-text-color-white` : "mdui-color-theme-accent";
    if (isImage(options.avatar)) {
      return /* @__PURE__ */ React.createElement("div", {
        className: "mdui-list-item-avatar"
      }, /* @__PURE__ */ React.createElement("img", {
        src: options.avatar
      }));
    } else {
      return useIcon || options.avatar == "" ? iconView(options.avatar, avatarColor) : /* @__PURE__ */ React.createElement("i", {
        className: `mdui-list-item-avatar mdui-icon material-icons ${avatarCol}`
      }, options.avatar);
    }
  };
  const iconView = (icon, color) => {
    if (icon == void 0)
      return;
    return /* @__PURE__ */ React.createElement("i", {
      className: `mdui-list-item-icon mdui-icon material-icons ${color ? `mdui-text-color-${color}` : ""}`
    }, icon);
  };
  const listItem = () => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, !reverse ? avatarView() : iconView(options.icon, iconColor), options.subtitle != void 0 ? /* @__PURE__ */ React.createElement("div", {
      className: "mdui-list-item-content"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mdui-list-item-title mdui-list-item-one-line"
    }, options.title), /* @__PURE__ */ React.createElement("div", {
      className: `mdui-list-item-text ${multiline ? "mdui-list-item-two-line" : "mdui-list-item-one-line"}`
    }, options.subtitle)) : /* @__PURE__ */ React.createElement("div", {
      className: "mdui-list-item-content"
    }, options.title), reverse ? avatarView() : iconView(options.icon, iconColor));
  };
  return /* @__PURE__ */ React.createElement("label", {
    className: `mdui-list-item ${active ? "mdui-list-item-active" : ""} ${bgColor ? `mdui-color-${bgColor}` : ""}`,
    onClick: handleClick
  }, listItem());
};
ListItem.defaultProps = defaultProps$6;
ListItem.displayName = "MDUI-ListItem";
const defaultProps$5 = {};
const Collapse = (props) => {
  const { children, active, options, useIcon, avatarColor, checked, value, bgColor, multiline, divider, onItemClick } = { ...defaultProps$5, ...props };
  const isWeb = Taro.getEnv() == "WEB";
  const [header, setHeader] = useState({});
  const [list, setList] = useState([]);
  const [opened, setOpened] = useState(checked);
  const [bodyHeight, setBodyHeight] = useState(0);
  const [collapeHeight, setCollapeHeight] = useState(-1);
  const context = useContext(RadioContext);
  const bodyRef = useRef(null);
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    if (bodyHeight == 0 || !opened)
      return;
    const h = checked ? bodyHeight : 0;
    setCollapeHeight(h);
    setOpened(checked);
  }, [checked]);
  useEffect(() => {
    if (!options)
      return;
    const { avatar, title, subtitle, items } = options;
    setHeader({ avatar, title, subtitle });
    setList(items);
    const ref = bodyRef.current;
    if (isWeb) {
      setTimeout(() => {
        const h = (ref == null ? void 0 : ref.scrollHeight) || 0;
        setBodyHeight(h);
        setOpacity(1);
      }, 100);
    } else {
      setTimeout(() => {
        ref == null ? void 0 : ref.getBoundingClientRect().then((res) => {
          if (res) {
            setBodyHeight(res.height);
            setOpacity(1);
          }
        });
      }, 400);
    }
  }, [options]);
  useEffect(() => {
    if (bodyHeight > 0) {
      setOpened(checked);
      setCollapeHeight(checked ? bodyHeight : 0);
    }
  }, [bodyHeight]);
  const bodyStyle = useMemo(() => {
    let stl = {};
    if (bodyHeight == 0) {
      stl.height = isWeb ? 0 : "auto";
    } else {
      stl.height = `${collapeHeight}px`;
    }
    return stl;
  }, [collapeHeight]);
  const handleClick = () => {
    const h = !opened ? bodyHeight : 0;
    setCollapeHeight(h);
    setOpened(!opened);
    context && context.onChange(!opened, value);
  };
  const handleItemClick = (data, subIdx) => {
    console.log("get:", value, subIdx);
    onItemClick && onItemClick(list[subIdx], value, subIdx);
  };
  const avatarView = () => {
    if ((header == null ? void 0 : header.avatar) == void 0)
      return;
    const avatarCol = avatarColor ? `mdui-color-${avatarColor} mdui-text-color-white` : "mdui-color-theme-accent";
    if (isImage(header == null ? void 0 : header.avatar)) {
      return /* @__PURE__ */ React.createElement("div", {
        className: "mdui-list-item-avatar"
      }, /* @__PURE__ */ React.createElement("img", {
        src: header.avatar
      }));
    } else {
      return useIcon || header.avatar == "" ? iconView(header.avatar, avatarColor) : /* @__PURE__ */ React.createElement("i", {
        className: `mdui-list-item-avatar mdui-icon material-icons ${avatarCol}`
      }, header.avatar);
    }
  };
  const iconView = (icon, color) => {
    return /* @__PURE__ */ React.createElement("i", {
      className: `mdui-list-item-icon mdui-icon material-icons ${color ? `mdui-text-color-${color}` : ""}`
    }, icon);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: `mdui-collapse-item ${opened ? "mdui-collapse-item-open" : ""}`,
    style: { opacity: `${opacity}` }
  }, /* @__PURE__ */ React.createElement("div", {
    className: `mdui-list-item ${active ? "mdui-list-item-active" : ""} ${bgColor ? `mdui-color-${bgColor}` : ""} mdui-collapse-item-header mdui-ripple`,
    onClick: handleClick
  }, avatarView(), header.subtitle != void 0 ? /* @__PURE__ */ React.createElement("div", {
    className: "mdui-list-item-content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mdui-list-item-title mdui-list-item-one-line"
  }, header.title), /* @__PURE__ */ React.createElement("div", {
    className: `mdui-list-item-text ${multiline ? "mdui-list-item-two-line" : "mdui-list-item-one-line"}`
  }, header.subtitle)) : /* @__PURE__ */ React.createElement("div", {
    className: "mdui-list-item-content"
  }, header.title), /* @__PURE__ */ React.createElement("i", {
    className: "mdui-collapse-item-arrow mdui-icon material-icons"
  }, "keyboard_arrow_down")), /* @__PURE__ */ React.createElement("ul", {
    className: "mdui-collapse-item-body mdui-list mdui-list-dense",
    ref: bodyRef,
    style: bodyStyle
  }, /* @__PURE__ */ React.createElement(List, {
    ...props,
    divider,
    options: list,
    onItemClick: handleItemClick
  }), children));
};
Collapse.defaultProps = defaultProps$5;
Collapse.displayName = "MDUI-Collapse";
const id = uuid();
const defaultProps$4 = {};
const Panel = (props) => {
  const { children, options, opened, accordion, gapless } = { ...defaultProps$4, ...props };
  const [checkList, setCheckList] = useState([]);
  const [heights, setHeights] = useState([]);
  const panelRef = useRef();
  const getHeights = async (children2) => {
    const heights2 = [];
    for (let i = 0; i < children2.length; i++) {
      const rect = await children2[i].getBoundingClientRect();
      console.log(rect);
      heights2.push(rect.height - 48);
    }
    console.log(heights2);
    setHeights(heights2);
  };
  useEffect(() => {
    setTimeout(() => {
      console.log(panelRef.current);
      getHeights(panelRef.current.childNodes);
    }, 300);
  }, [options]);
  useEffect(() => {
    let checked = [];
    if (typeof opened == "number") {
      checked = [opened];
    } else if (opened == "*") {
      for (let i = 0; i < options.length; i++) {
        checked.push(i);
      }
    } else if (opened && opened.length > 0) {
      checked = opened;
    }
    setCheckList(checked);
  }, [opened]);
  const handleClick = (idx) => {
    const pos = checkList.indexOf(idx);
    if (pos >= 0) {
      const list = checkList.concat([]);
      list.splice(pos, 1);
      setCheckList(list);
      return;
    }
    if (accordion) {
      setCheckList([idx]);
    } else {
      setCheckList(checkList.concat(idx));
    }
  };
  const getStyle = (idx) => {
    if (heights.length == 0) {
      return { height: "auto", opacity: "0" };
    }
    if (checkList.indexOf(idx) >= 0) {
      return { height: heights[idx] + "px" };
    } else {
      return { height: "0" };
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    id,
    ref: panelRef,
    className: `mdui-panel ${gapless ? "mdui-panel-gapless" : ""}`,
    style: { opacity: heights.length }
  }, options.map(
    (opt, idx) => /* @__PURE__ */ React.createElement("div", {
      className: `mdui-panel-item ${checkList.indexOf(idx) >= 0 ? "mdui-panel-item-open" : ""}`
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mdui-panel-item-header",
      onClick: () => handleClick(idx)
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mdui-panel-item-title"
    }, opt.title), opt.subtitle && /* @__PURE__ */ React.createElement("div", {
      className: "mdui-panel-item-summary"
    }, opt.subtitle), opt.summary && /* @__PURE__ */ React.createElement("div", {
      className: "mdui-panel-item-summary"
    }, opt.summary), /* @__PURE__ */ React.createElement("i", {
      className: "mdui-panel-item-arrow mdui-icon material-icons"
    }, "keyboard_arrow_down")), /* @__PURE__ */ React.createElement("div", {
      className: "mdui-panel-item-body",
      style: getStyle(idx)
    }, /* @__PURE__ */ React.createElement(React.Fragment, null, opt.items && opt.items.map((item) => /* @__PURE__ */ React.createElement("p", null, item)), opt.actions && /* @__PURE__ */ React.createElement("div", {
      className: "mdui-panel-item-actions"
    }, opt.actions.map(
      (act) => /* @__PURE__ */ React.createElement("button", {
        className: "mdui-btn mdui-ripple"
      }, act)
    )))))
  ));
};
Panel.defaultProps = defaultProps$4;
Panel.displayName = "MDUI-Panel";
const defaultProps$3 = {};
const Card = (props) => {
  const { head, menu, media, content, children } = { ...defaultProps$3, ...props };
  const coveredClasses = useCallback(() => {
    const covered = content.covered;
    return [
      "mdui-card-media-covered",
      `${typeof covered !== "boolean" && (covered == null ? void 0 : covered.indexOf("top")) >= 0 ? `mdui-card-media-covered-top` : ""}`,
      `${typeof covered !== "boolean" && (covered == null ? void 0 : covered.indexOf("trans")) >= 0 ? `mdui-card-media-covered-transparent` : ""}`,
      `${covered == "grad" ? `mdui-card-media-covered-gradient` : ""}`
    ].filter(Boolean).join(" ");
  }, [content]);
  const [coveredClass, setCoveredClass] = useState(coveredClasses());
  useEffect(() => {
    setCoveredClass(coveredClasses());
  }, [
    content,
    coveredClasses
  ]);
  const actions = content.actions;
  let leftActions, rightActions;
  if (actions && actions.indexOf(" ") >= 0) {
    leftActions = actions.slice(0, actions.indexOf(" "));
    rightActions = actions.slice(actions.indexOf(" ") + 1);
  }
  const isImg = (media == null ? void 0 : media.match("(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga|JPG|BMP|GIF|ICO|PCX|JPEG|TIF|PNG|RAW|TGA)$")) != null;
  const actionView = () => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "mdui-card-actions"
    }, leftActions.map((act) => /* @__PURE__ */ React.createElement("button", {
      className: "mdui-btn mdui-ripple"
    }, act)), rightActions && rightActions.map((act) => /* @__PURE__ */ React.createElement("button", {
      className: "mdui-btn mdui-btn-icon mdui-float-right"
    }, /* @__PURE__ */ React.createElement("i", {
      className: "mdui-icon material-icons"
    }, act))));
  };
  const contentView = () => {
    return /* @__PURE__ */ React.createElement("div", null, content.title && /* @__PURE__ */ React.createElement("div", {
      className: "mdui-card-primary"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mdui-card-primary-title"
    }, content.title), /* @__PURE__ */ React.createElement("div", {
      className: "mdui-card-primary-subtitle"
    }, content.subtitle)), content.text && /* @__PURE__ */ React.createElement("div", {
      className: "mdui-card-content"
    }, content.text), content.actions && actionView());
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "mdui-card"
  }, head && /* @__PURE__ */ React.createElement("div", {
    className: "mdui-card-header"
  }, head.icon && /* @__PURE__ */ React.createElement("img", {
    className: "mdui-card-header-avatar",
    src: head.icon
  }), head.title && /* @__PURE__ */ React.createElement("div", {
    className: "mdui-card-header-title"
  }, head.title), head.subtitle && /* @__PURE__ */ React.createElement("div", {
    className: "mdui-card-header-subtitle"
  }, head.subtitle)), isImg ? /* @__PURE__ */ React.createElement("div", {
    className: "mdui-card-media"
  }, /* @__PURE__ */ React.createElement("img", {
    src: media,
    className: "mdui-img-fluid",
    mode: "widthFix"
  }), menu && /* @__PURE__ */ React.createElement("div", {
    className: "mdui-card-menu"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "mdui-btn mdui-btn-icon mdui-text-color-white"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "mdui-icon material-icons"
  }, menu))), content && content.covered && /* @__PURE__ */ React.createElement("div", {
    className: coveredClass
  }, " ", contentView())) : media ? /* @__PURE__ */ React.createElement("div", {
    className: "mdui-video-container"
  }, /* @__PURE__ */ React.createElement("video", {
    className: "mdui-video-fluid",
    src: media,
    controls: true
  })) : children, content && !content.covered && contentView());
};
Card.defaultProps = defaultProps$3;
Card.displayName = "MDUI-Card";
const defaultProps$2 = {};
const Chip = (props) => {
  const { avatar, title, color, headColor, icon } = { ...defaultProps$2, ...props };
  const avatarView = () => {
    if (isImage(avatar)) {
      return /* @__PURE__ */ React.createElement("img", {
        className: `mdui-chip-icon mdui-color-${headColor}`,
        src: avatar
      });
    } else if ((avatar == null ? void 0 : avatar.length) == 1) {
      return /* @__PURE__ */ React.createElement("span", {
        className: `mdui-chip-icon mdui-color-${headColor}`
      }, avatar);
    } else {
      return /* @__PURE__ */ React.createElement("span", {
        className: `mdui-chip-icon mdui-color-${headColor}`
      }, /* @__PURE__ */ React.createElement("i", {
        className: "mdui-icon material-icons"
      }, avatar));
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: `mdui-chip mdui-color-${color}`
  }, avatar && avatarView(), /* @__PURE__ */ React.createElement("span", {
    className: "mdui-chip-title"
  }, title), icon && /* @__PURE__ */ React.createElement("span", {
    className: "mdui-chip-delete"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "mdui-icon material-icons"
  }, icon)));
};
Chip.defaultProps = defaultProps$2;
Chip.displayName = "MDUI-Chip";
const defaultProps$1 = {
  options: {}
};
const ControlItem = (props) => {
  const { children, onClick, active, options, useIcon, avatarColor, iconColor, bgColor, reverse, multiline, controller } = { ...defaultProps$1, ...props };
  const [checked, setChecked] = useState(controller == null ? void 0 : controller.checked);
  const context = useContext(RadioContext);
  Taro.getEnv() == "WEB";
  useEffect(() => {
    console.log("itemGetEffect:" + (controller == null ? void 0 : controller.checked), "current:" + checked);
    setChecked(controller == null ? void 0 : controller.checked);
  }, [options, controller == null ? void 0 : controller.checked]);
  const handleClick = (e) => {
    if (controller) {
      if (controller.type == "radio" && checked) {
        return;
      }
      const st = !checked;
      console.log("itemclick:" + checked, "will:" + st);
      context && context.onChange(st, controller.value);
    }
    onClick && onClick(options);
  };
  const onControllerChanged = (st, value) => {
    console.log(st, value);
    context && context.onChange(st, value);
  };
  const avatarView = () => {
    if (options.avatar == void 0)
      return;
    const avatarCol = avatarColor ? `mdui-color-${avatarColor} mdui-text-color-white` : "mdui-color-theme-accent";
    if (isImage(options.avatar)) {
      return /* @__PURE__ */ React.createElement("div", {
        className: "mdui-list-item-avatar"
      }, /* @__PURE__ */ React.createElement("img", {
        src: options.avatar
      }));
    } else {
      return useIcon ? iconView(options.avatar, avatarColor) : /* @__PURE__ */ React.createElement("i", {
        className: `mdui-list-item-avatar mdui-icon material-icons ${avatarCol}`
      }, options.avatar);
    }
  };
  const iconView = (icon, color) => {
    if (icon == void 0)
      return;
    return /* @__PURE__ */ React.createElement("i", {
      className: `mdui-list-item-icon mdui-icon material-icons ${color ? `mdui-text-color-${color}` : ""}`
    }, icon);
  };
  const controlView = () => {
    console.log(controller);
    if (!controller)
      return;
    const { type, name, value } = controller;
    if (type == "checkbox") {
      return /* @__PURE__ */ React.createElement(CheckBox, {
        checked,
        value,
        onChange: onControllerChanged
      });
    } else if (type == "switch") {
      return /* @__PURE__ */ React.createElement(Switch, {
        checked,
        value,
        onChange: onControllerChanged
      });
    } else if (type == "radio") {
      return /* @__PURE__ */ React.createElement(Radio, {
        checked,
        value,
        name,
        onChange: onControllerChanged
      });
    }
  };
  const listItem = () => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, avatarView(), options.subtitle != void 0 ? /* @__PURE__ */ React.createElement("div", {
      className: "mdui-list-item-content"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "mdui-list-item-title mdui-list-item-one-line"
    }, options.title), /* @__PURE__ */ React.createElement("div", {
      className: `mdui-list-item-text ${multiline ? "mdui-list-item-two-line" : "mdui-list-item-one-line"}`
    }, options.subtitle)) : /* @__PURE__ */ React.createElement("div", {
      className: "mdui-list-item-content"
    }, options.title), iconView(options.icon, iconColor));
  };
  return /* @__PURE__ */ React.createElement("label", {
    className: `mdui-list-item ${active ? "mdui-list-item-active" : ""} ${bgColor ? `mdui-color-${bgColor}` : ""}`,
    onClick: handleClick
  }, reverse && controlView(), listItem(), !reverse && controlView());
};
ControlItem.defaultProps = defaultProps$1;
ControlItem.displayName = "MDUI-ControlItem";
const RadioContext = React.createContext({ onChange: (state, value) => {
} });
const defaultProps = {
  direction: "column"
};
const List = (props) => {
  const { children, options, divider, dense, controller, multiline, avatarColor, iconColor, reverse, useIcon, direction, onChange, onItemClick } = { ...defaultProps, ...props };
  const [listOptions, setOptions] = useState();
  const [groups, setGroups] = useState();
  const [activeIdx, setActiveIdx] = useState();
  const [control, setControl] = useState();
  const [checkMode, setCheckMode] = useState();
  const [checkList, setCheckList] = useState([]);
  const [controlType, setControlType] = useState("");
  let controlName = "";
  useEffect(() => {
    if (controller) {
      let ctrl = { type: "radio", checked: [] };
      if (typeof controller == "string") {
        ctrl.type = controller;
      } else if (controller.type) {
        ctrl = Object.assign({}, controller);
        const { checked = [] } = ctrl;
        ctrl.checked = isNumber(checked) ? [checked] : checked;
        controlName = controller.name || "";
      } else {
        ctrl = null;
      }
      let mode = "multiple";
      if ((ctrl == null ? void 0 : ctrl.type) == "radio" || isObject(controller) && isNumber(controller.checked)) {
        mode = "single";
      }
      setControlType(ctrl.type);
      setCheckList(ctrl.checked);
      setCheckMode(mode);
      console.log("start:", controlType);
      if (ctrl.type == "collapse") {
        setOptions(options);
        return;
      }
    }
    if (Array.isArray(options)) {
      if (isString(options[0])) {
        let items = [];
        const opts = options;
        opts.map((item, idx) => {
          items.push({ title: item });
        });
        setOptions(items);
      } else if (Array.isArray(options[0])) {
        let opts = [], dividerPos = [];
        let pos = 0;
        options.map((items, i) => {
          opts = opts.concat(items);
          if (i > 0) {
            dividerPos.push(pos + items.length + 1);
          }
        });
        setGroups(dividerPos);
        setOptions(opts);
      } else if (options[0] && "title" in options[0]) {
        setOptions(options);
      } else {
        console.warn("\u5217\u8868\u6570\u636E\u9519\u8BEF");
      }
    } else {
      const dividerPos = [];
      const itemOptions = options;
      let items = [];
      let idx = 0;
      for (let groupName in itemOptions) {
        dividerPos.push(idx);
        idx += itemOptions[groupName].length;
        items = items.concat(itemOptions[groupName]);
      }
      setGroups(dividerPos);
      setOptions(items);
    }
  }, []);
  const groupView = (idx) => {
    if (!groups)
      return null;
    const findIdx = groups.indexOf(idx);
    if (findIdx >= 0) {
      const groupName = Array.isArray(options) ? "" : Object.keys(options)[findIdx];
      if (groupName) {
        const cls = divider == "group-inset" ? "mdui-subheader-inset" : "mdui-subheader";
        return /* @__PURE__ */ React.createElement("li", {
          className: cls
        }, groupName);
      } else {
        const cls = divider == "inset" ? "mdui-divider-inset" : "mdui-divider";
        return /* @__PURE__ */ React.createElement("li", {
          className: `${cls} mdui-m-y-0`
        });
      }
    }
    return null;
  };
  const dividerColor = () => {
    if (divider && divider != "inset" && divider != "group-inset" && divider != "normal") {
      return divider;
    }
  };
  const dividerView = (idx, lastIdx) => {
    if (!divider || dividerColor() || divider == "group-inset")
      return null;
    const cls = divider.indexOf("inset") >= 0 ? "mdui-divider-inset" : "mdui-divider";
    return idx < lastIdx && /* @__PURE__ */ React.createElement("li", {
      className: `${cls} mdui-m-y-0`
    });
  };
  const handleClick = (idx, subIndex, subData) => {
    if (!control) {
      setActiveIdx(idx);
    }
    if (subIndex != void 0) {
      onItemClick && onItemClick(subData, idx, subIndex);
    } else {
      onItemClick && onItemClick(listOptions[idx], idx);
    }
  };
  const handleControllerChange = (state, value) => {
    console.log("list onChange:", checkList, state, value);
    const checkedIdx = value;
    let checked = [];
    if (checkMode == "single") {
      if (!state)
        checked = [];
      else
        checked = [checkedIdx];
    } else {
      if (state) {
        checked = [...checkList, checkedIdx];
      } else {
        const idx = checkList.indexOf(checkedIdx);
        if (idx >= 0) {
          checkList.splice(idx, 1);
          checked = [...checkList];
        }
      }
    }
    console.log("list changed:", checked);
    setCheckList(checked);
    setActiveIdx(checkedIdx);
    onItemClick && onItemClick(checkedIdx);
    onChange && onChange(checked);
  };
  const itemView = useCallback(() => {
    console.log("clone:", controlType);
    const dColor = dividerColor();
    return listOptions == null ? void 0 : listOptions.map((option, idx) => {
      const active = activeIdx == idx;
      const bgColor = idx % 2 == 0 ? dColor : void 0;
      const prop = { options: option, multiline, active, avatarColor, iconColor, reverse, useIcon, bgColor };
      const check = checkList.indexOf(idx) >= 0;
      if (controller) {
        prop.controller = { type: controlType, name: controlName, checked: check, value: idx };
      }
      return /* @__PURE__ */ React.createElement(React.Fragment, {
        key: idx
      }, groupView(idx), controlType == "collapse" ? /* @__PURE__ */ React.createElement(Collapse, {
        ...prop,
        checked: check,
        controller: null,
        value: idx,
        divider,
        onClick: () => handleClick(idx),
        onItemClick: (data, itemIdx, subIdx) => {
          handleClick(idx, subIdx, data);
        }
      }) : controlType != "" ? /* @__PURE__ */ React.createElement(ControlItem, {
        ...prop,
        onClick: () => handleClick(idx)
      }) : /* @__PURE__ */ React.createElement(ListItem, {
        ...prop,
        onClick: () => handleClick(idx)
      }), dividerView(idx, listOptions.length - 1));
    });
  }, [listOptions, checkList, activeIdx]);
  const cloneChildren = useCallback(() => {
    if (controlType == "")
      return children;
    const count = React.Children.count(children);
    return React.Children.map(children, (child, idx) => {
      const checked = checkList.indexOf(idx) >= 0;
      const clone = React.cloneElement(child, {
        checked,
        name: controlName,
        value: idx,
        onChange: handleControllerChange
      });
      return /* @__PURE__ */ React.createElement("div", null, clone, dividerView(idx, count - 1));
    });
  }, [controlType, checkList]);
  return /* @__PURE__ */ React.createElement(RadioContext.Provider, {
    value: { onChange: handleControllerChange }
  }, /* @__PURE__ */ React.createElement("div", {
    className: `mdui-list ${dense ? "mdui-list-dense" : ""}`,
    style: direction == "row" ? { display: "flex" } : {}
  }, itemView(), cloneChildren()));
};
List.defaultProps = defaultProps;
List.displayName = "MDUI-List";
export { AppBar, Button, Card, CheckBox, Chip, Collapse, Fab, Grid, List, ListItem, NavBar, Panel, Radio, SearchBar, Slider, Spinner, Switch, Tab, TextField, Toolbar };
