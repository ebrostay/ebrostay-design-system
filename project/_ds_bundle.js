/* @ds-bundle: {"format":3,"namespace":"EbrostayDesignSystem_8b1b13","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Rating","sourcePath":"components/core/Rating.jsx"},{"name":"RatingInline","sourcePath":"components/core/Rating.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"AmenityChip","sourcePath":"components/product/AmenityChip.jsx"},{"name":"PropertyCard","sourcePath":"components/product/PropertyCard.jsx"},{"name":"SearchBar","sourcePath":"components/product/SearchBar.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"56b49cc7cec9","components/core/Badge.jsx":"60268f92156c","components/core/Button.jsx":"3662b1daeab3","components/core/Card.jsx":"d49210fd0821","components/core/IconButton.jsx":"87ec6c5b8a0e","components/core/Rating.jsx":"f019c48dfa86","components/core/Tag.jsx":"6f60f7a44d38","components/forms/Checkbox.jsx":"ac0bec15b1fa","components/forms/Input.jsx":"f4503848a411","components/forms/Select.jsx":"8782da4aac2f","components/forms/Switch.jsx":"5d70970416f6","components/navigation/Tabs.jsx":"ff7c12711261","components/product/AmenityChip.jsx":"ffad2005a2e8","components/product/PropertyCard.jsx":"98412af30085","components/product/SearchBar.jsx":"42d1b8835744","ui_kits/auth/Auth.jsx":"37494da1ac9b","ui_kits/dashboard/DashApp.jsx":"dc639b4bcaf2","ui_kits/dashboard/Overview.jsx":"4b14a70ad8ba","ui_kits/dashboard/Shell.jsx":"43f91ec973ad","ui_kits/dashboard/Views.jsx":"f72c97cbd88b","ui_kits/dashboard/data.js":"67313febc1bc","ui_kits/website/Detail.jsx":"92924b074bf6","ui_kits/website/Header.jsx":"289ea78dc42a","ui_kits/website/Home.jsx":"2e16c5e8cd32","ui_kits/website/Results.jsx":"2b008685aaab","ui_kits/website/SiteApp.jsx":"c411d79bcaa8","ui_kits/website/data.js":"8e924b8f5872"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EbrostayDesignSystem_8b1b13 = window.EbrostayDesignSystem_8b1b13 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const sizes = {
  xs: 28,
  sm: 36,
  md: 44,
  lg: 56,
  xl: 72
};
function initialsOf(name = '') {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase() || '·';
}

/** User/host avatar — image with initials fallback, optional online dot. */
function Avatar({
  src,
  name = '',
  size = 'md',
  status = null,
  ring = false,
  style = {}
}) {
  const d = sizes[size] || sizes.md;
  const dot = Math.max(8, Math.round(d * 0.26));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: d,
      height: d,
      flex: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: d,
      height: d,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--green-100)',
      color: 'var(--green-700)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: d * 0.38,
      boxShadow: ring ? '0 0 0 2px var(--surface-card), 0 0 0 4px var(--brand)' : 'none'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initialsOf(name)), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: dot,
      height: dot,
      borderRadius: '50%',
      border: '2px solid var(--surface-card)',
      background: status === 'online' ? 'var(--success)' : 'var(--stone-400)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const tones = {
  brand: {
    soft: ['var(--green-50)', 'var(--green-700)'],
    solid: ['var(--brand)', '#fff']
  },
  accent: {
    soft: ['var(--clay-50)', 'var(--clay-700)'],
    solid: ['var(--accent)', '#fff']
  },
  neutral: {
    soft: ['var(--stone-100)', 'var(--stone-700)'],
    solid: ['var(--stone-700)', '#fff']
  },
  success: {
    soft: ['var(--green-50)', 'var(--green-700)'],
    solid: ['var(--success)', '#fff']
  },
  warning: {
    soft: ['var(--warning-soft)', '#7a5410'],
    solid: ['var(--warning)', '#fff']
  },
  danger: {
    soft: ['var(--danger-soft)', '#8f2a2a'],
    solid: ['var(--danger)', '#fff']
  },
  info: {
    soft: ['var(--info-soft)', '#1d5396'],
    solid: ['var(--info)', '#fff']
  }
};

/** Small status/label pill. `dot` adds a leading status dot. */
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  dot = false,
  icon = null,
  style = {}
}) {
  const t = tones[tone] || tones.neutral;
  const [bg, fg] = solid ? t.solid : t.soft;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      height: 24,
      background: bg,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-snug)',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 13,
      height: 13
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '0 14px',
    height: 36,
    fontSize: 'var(--text-sm)',
    gap: 7
  },
  md: {
    padding: '0 18px',
    height: 44,
    fontSize: 'var(--text-base)',
    gap: 8
  },
  lg: {
    padding: '0 24px',
    height: 52,
    fontSize: 'var(--text-md)',
    gap: 10
  }
};
const variants = {
  primary: {
    background: 'var(--brand)',
    color: '#fff',
    border: '1px solid transparent'
  },
  accent: {
    background: 'var(--accent)',
    color: '#fff',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-strong)',
    border: '1px solid var(--border-default)'
  },
  subtle: {
    background: 'var(--brand-soft)',
    color: 'var(--text-brand)',
    border: '1px solid transparent'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-strong)',
    border: '1px solid transparent'
  }
};

/**
 * Ebrostay primary action button. Pill-free, soft-cornered, warm.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  fullWidth = false,
  loading = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const isDisabled = disabled || loading;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: onClick,
    disabled: isDisabled,
    "data-variant": variant,
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: 'var(--tracking-snug)',
      borderRadius: 'var(--radius-md)',
      cursor: isDisabled ? 'not-allowed' : 'pointer',
      opacity: isDisabled ? 0.55 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-fast) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!isDisabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = '';
    },
    onMouseEnter: e => {
      if (isDisabled) return;
      if (variant === 'primary') {
        e.currentTarget.style.background = 'var(--brand-hover)';
        e.currentTarget.style.boxShadow = 'var(--shadow-brand)';
      } else if (variant === 'accent') {
        e.currentTarget.style.background = 'var(--accent-hover)';
      } else if (variant === 'secondary') {
        e.currentTarget.style.background = 'var(--surface-sunken)';
      } else if (variant === 'subtle') {
        e.currentTarget.style.background = 'var(--green-100)';
      } else if (variant === 'ghost') {
        e.currentTarget.style.background = 'var(--surface-sunken)';
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = v.background;
      e.currentTarget.style.boxShadow = '';
      e.currentTarget.style.transform = '';
    }
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      display: 'inline-block',
      animation: 'ebr-spin 0.7s linear infinite',
      opacity: 0.9
    }
  }), !loading && icon, children && /*#__PURE__*/React.createElement("span", null, children), !loading && iconRight, /*#__PURE__*/React.createElement("style", null, `@keyframes ebr-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pads = {
  sm: 'var(--space-4)',
  md: 'var(--space-5)',
  lg: 'var(--space-6)'
};

/** Generic surface container with soft corners and warm shadow. */
function Card({
  children,
  padding = 'md',
  interactive = false,
  elevation = 'sm',
  as = 'div',
  style = {},
  onClick,
  ...rest
}) {
  const Tag = as;
  const shadow = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  }[elevation] || 'var(--shadow-sm)';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onClick: onClick,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: shadow,
      padding: pads[padding] ?? padding,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = shadow;
      }
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 34,
  md: 42,
  lg: 50
};
const variants = {
  solid: {
    background: 'var(--brand)',
    color: '#fff',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-strong)',
    border: '1px solid var(--border-default)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent'
  },
  glass: {
    background: 'var(--glass-strong)',
    color: 'var(--text-strong)',
    border: '1px solid rgba(255,255,255,.6)'
  }
};

/** Square icon-only button. Pass a single icon node as children. */
function IconButton({
  children,
  label,
  variant = 'secondary',
  size = 'md',
  round = false,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const d = sizes[size] || sizes.md;
  const v = variants[variant] || variants.secondary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      padding: 0,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      backdropFilter: variant === 'glass' ? 'blur(var(--glass-blur))' : undefined,
      WebkitBackdropFilter: variant === 'glass' ? 'blur(var(--glass-blur))' : undefined,
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (disabled) return;
      if (variant === 'solid') e.currentTarget.style.background = 'var(--brand-hover)';else if (variant === 'glass') e.currentTarget.style.background = '#fff';else e.currentTarget.style.background = 'var(--surface-sunken)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = v.background;
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: size === 'sm' ? 17 : 19,
      height: size === 'sm' ? 17 : 19
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Rating.jsx
try { (() => {
const Star = ({
  fill,
  size
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  style: {
    display: 'block'
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2.6l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.93 6.2 20.47l1.11-6.46-4.7-4.58 6.49-.95z",
  fill: fill,
  stroke: fill,
  strokeWidth: "0.5",
  strokeLinejoin: "round"
}));

/** Star rating. `value` 0–5; shows numeric value and optional review count. */
function Rating({
  value = 0,
  count = null,
  size = 16,
  showValue = true,
  style = {}
}) {
  const full = Math.round(value);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement(Star, {
    key: i,
    size: size,
    fill: i < full ? 'var(--star)' : 'var(--stone-300)'
  }))), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, value.toFixed(1)), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "(", count, ")"));
}

/** Compact single-star + number, for dense list rows. */
function RatingInline({
  value = 0,
  count = null,
  size = 15,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Star, {
    size: size,
    fill: "var(--star)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, value.toFixed(2)), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "\xB7 ", count, " reviews"));
}
Object.assign(__ds_scope, { Rating, RatingInline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Rating.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Filter / amenity chip. Optional leading icon, selectable, and removable. */
function Tag({
  children,
  icon = null,
  selected = false,
  removable = false,
  onRemove,
  onClick,
  style = {},
  ...rest
}) {
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    role: interactive ? 'button' : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '0 12px',
      height: 36,
      background: selected ? 'var(--brand-soft)' : 'var(--surface-card)',
      color: selected ? 'var(--text-brand)' : 'var(--text-body)',
      border: `1px solid ${selected ? 'var(--border-brand)' : 'var(--border-default)'}`,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      borderRadius: 'var(--radius-pill)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      userSelect: 'none',
      whiteSpace: 'nowrap',
      ...style
    },
    onMouseEnter: e => {
      if (interactive && !selected) e.currentTarget.style.borderColor = 'var(--border-strong)';
    },
    onMouseLeave: e => {
      if (!selected) e.currentTarget.style.borderColor = 'var(--border-default)';
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 15,
      height: 15
    }
  }, icon), children, removable && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      marginRight: -2,
      borderRadius: '50%',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 14,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Custom checkbox with label. Controlled via `checked` + `onChange`. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style = {}
}) {
  const fieldId = id || (label ? `c-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: fieldId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      border: `1.5px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--brand)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: 38,
    fontSize: 'var(--text-sm)',
    pad: 12
  },
  md: {
    height: 46,
    fontSize: 'var(--text-base)',
    pad: 14
  },
  lg: {
    height: 54,
    fontSize: 'var(--text-md)',
    pad: 16
  }
};

/** Text field with label, hint/error, and optional leading/trailing icons. */
function Input({
  label,
  hint,
  error,
  icon = null,
  trailing = null,
  size = 'md',
  id,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const s = sizes[size] || sizes.md;
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--brand)' : 'var(--border-default)';
  const fieldId = id || (label ? `f-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      height: s.height,
      padding: `0 ${s.pad}px`,
      background: 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 18,
      height: 18,
      color: 'var(--text-muted)',
      flex: 'none'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      color: 'var(--text-strong)',
      minWidth: 0,
      ...style
    }
  }, rest)), trailing && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      flex: 'none'
    }
  }, trailing)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Styled native select with chevron and brand focus ring. */
function Select({
  label,
  hint,
  error,
  size = 'md',
  id,
  children,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const heights = {
    sm: 38,
    md: 46,
    lg: 54
  };
  const h = heights[size] || 46;
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--brand)' : 'var(--border-default)';
  const fieldId = id || (label ? `s-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 40px 0 14px',
      background: 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? 'var(--ring-focus)' : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-base)',
      color: 'var(--text-strong)',
      cursor: 'pointer',
      outline: 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2.2",
    style: {
      position: 'absolute',
      right: 13,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/** Toggle switch. Controlled via `checked` + `onChange`. */
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style = {}
}) {
  const fieldId = id || (label ? `sw-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.55 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: fieldId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 46,
      height: 28,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--brand)' : 'var(--stone-300)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: 3,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: checked ? 'translateX(18px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-spring)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underline tabs. Controlled via `value` + `onChange`. `items`: [{value,label}]. */
function Tabs({
  items = [],
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 28,
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(it.value),
      style: {
        position: 'relative',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '0 0 14px',
        marginBottom: -1,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-base)',
        fontWeight: active ? 700 : 500,
        color: active ? 'var(--text-strong)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-body)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'var(--text-muted)';
      }
    }, it.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 3,
        borderRadius: '3px 3px 0 0',
        background: active ? 'var(--brand)' : 'transparent'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/product/AmenityChip.jsx
try { (() => {
/** Amenity row item: icon + label. Use in property detail amenity lists. */
function AmenityChip({
  icon = null,
  label,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'var(--brand-soft)',
      color: 'var(--brand)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 20,
      height: 20
    }
  }, icon)), label);
}
Object.assign(__ds_scope, { AmenityChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/AmenityChip.jsx", error: String((e && e.message) || e) }); }

// components/product/PropertyCard.jsx
try { (() => {
/**
 * The signature Ebrostay listing card: photo with favorite heart + optional badge,
 * title, neighbourhood, inline rating, and price per night.
 */
function PropertyCard({
  image,
  title,
  location,
  price,
  currency = '€',
  period = 'night',
  rating,
  reviews,
  badge,
  badgeTone = 'brand',
  favorite = false,
  onFavorite,
  note,
  onClick,
  style = {}
}) {
  const [fav, setFav] = React.useState(favorite);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      cursor: onClick ? 'pointer' : 'default',
      fontFamily: 'var(--font-sans)',
      ...style
    },
    onMouseEnter: e => {
      const img = e.currentTarget.querySelector('[data-ph]');
      if (img) img.style.transform = 'scale(1.045)';
    },
    onMouseLeave: e => {
      const img = e.currentTarget.querySelector('[data-ph]');
      if (img) img.style.transform = '';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '20 / 17',
      background: 'var(--stone-200)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-ph": true,
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: image ? `url(${image})` : 'linear-gradient(135deg,var(--green-200),var(--clay-200))',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'saturate(1.05) contrast(1.01)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      padding: '5px 11px',
      background: badgeTone === 'accent' ? 'var(--accent)' : badgeTone === 'glass' ? 'var(--glass-strong)' : 'var(--brand)',
      color: badgeTone === 'glass' ? 'var(--text-strong)' : '#fff',
      backdropFilter: badgeTone === 'glass' ? 'blur(var(--glass-blur))' : undefined,
      WebkitBackdropFilter: badgeTone === 'glass' ? 'blur(var(--glass-blur))' : undefined,
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-snug)'
    }
  }, badge), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Save",
    onClick: e => {
      e.stopPropagation();
      setFav(!fav);
      onFavorite && onFavorite(!fav);
    },
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 38,
      height: 38,
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--glass-strong)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      transition: 'transform var(--dur-fast) var(--ease-spring)'
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.88)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = '';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: fav ? 'var(--accent)' : 'none',
    stroke: fav ? 'var(--accent)' : 'var(--stone-700)',
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-md)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-snug)',
      lineHeight: 1.2
    }
  }, title), rating != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "var(--star)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.6l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.93 6.2 20.47l1.11-6.46-4.7-4.58 6.49-.95z"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, rating))), location && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, location, reviews != null ? ` · ${reviews} reviews` : ''), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-brand)',
      fontWeight: 600,
      marginTop: 2
    }
  }, note), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 6,
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 'var(--text-md)'
    }
  }, currency, price), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, " / ", period))));
}
Object.assign(__ds_scope, { PropertyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/PropertyCard.jsx", error: String((e && e.message) || e) }); }

// components/product/SearchBar.jsx
try { (() => {
function Segment({
  label,
  value,
  placeholder,
  onClick,
  first,
  flex = 1
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      flex,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 2,
      padding: '10px 20px',
      border: 'none',
      background: hover ? 'var(--surface-sunken)' : 'transparent',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      textAlign: 'left',
      minWidth: 0,
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-snug)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: value ? 'var(--text-body)' : 'var(--text-subtle)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%'
    }
  }, value || placeholder));
}
const Divider = () => /*#__PURE__*/React.createElement("span", {
  style: {
    width: 1,
    height: 30,
    background: 'var(--border-subtle)',
    flex: 'none'
  }
});

/**
 * The hero search control: Where / Check-in / Check-out / Guests segments in a
 * single glassy pill with a green search button. Segments are buttons — wire
 * `onSegment(key)` to open your own pickers.
 */
function SearchBar({
  where,
  checkIn,
  checkOut,
  guests,
  onSegment,
  onSearch,
  compact = false,
  style = {}
}) {
  const seg = k => () => onSegment && onSegment(k);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      background: 'var(--glass-strong)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-lg)',
      padding: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Segment, {
    label: "Where",
    value: where,
    placeholder: "Search Zaragoza",
    onClick: seg('where'),
    first: true,
    flex: 1.4
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Segment, {
    label: "Check in",
    value: checkIn,
    placeholder: "Add dates",
    onClick: seg('checkIn')
  }), !compact && /*#__PURE__*/React.createElement(Divider, null), !compact && /*#__PURE__*/React.createElement(Segment, {
    label: "Check out",
    value: checkOut,
    placeholder: "Add dates",
    onClick: seg('checkOut')
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Segment, {
    label: "Guests",
    value: guests,
    placeholder: "Add guests",
    onClick: seg('guests')
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onSearch,
    "aria-label": "Search",
    style: {
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginLeft: 4,
      height: 52,
      padding: '0 22px',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--brand)',
      color: '#fff',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'var(--text-base)',
      transition: 'background var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--brand-hover)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'var(--brand)';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3",
    strokeLinecap: "round"
  })), !compact && /*#__PURE__*/React.createElement("span", null, "Search")));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/SearchBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/auth/Auth.jsx
try { (() => {
// Ebrostay auth — sign up / log in (exports window.EbrAuthApp)
function EbrAuthApp() {
  const {
    Input,
    Button,
    Checkbox
  } = window.EbrostayDesignSystem_8b1b13;
  const [mode, setMode] = React.useState('signup'); // signup | login
  const [done, setDone] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 30);
    return () => clearTimeout(t);
  });
  const signup = mode === 'signup';
  const submit = e => {
    e.preventDefault();
    setDone(true);
    setTimeout(() => setDone(false), 3200);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 'clamp(28px,4vw,56px)',
      overflow: 'hidden',
      backgroundImage: 'linear-gradient(180deg, rgba(10,51,36,.35), rgba(10,51,36,.78)), url(https://picsum.photos/seed/zaragoza-stay/1100/1400)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-inverse.svg",
    alt: "Ebrostay",
    height: "32"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'clamp(28px,3.2vw,44px)',
      lineHeight: 1.08,
      letterSpacing: 'var(--tracking-tight)',
      maxWidth: 460
    }
  }, "Your home in Zaragoza is a few taps away"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      color: 'rgba(255,255,255,.86)',
      fontSize: 'var(--text-md)',
      maxWidth: 420
    }
  }, "Join thousands of guests and hosts on the Ebro. Free cancellation, local support, no surprises.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      color: 'rgba(255,255,255,.9)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-lg)',
      display: 'block'
    }
  }, "1,200+"), "stays in the city"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-lg)',
      display: 'block'
    }
  }, "4.9\u2605"), "average rating"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(28px,4vw,56px)'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      width: '100%',
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      padding: 4,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-pill)',
      marginBottom: 28
    }
  }, [['signup', 'Sign up'], ['login', 'Log in']].map(([m, label]) => /*#__PURE__*/React.createElement("button", {
    key: m,
    type: "button",
    onClick: () => setMode(m),
    style: {
      padding: '8px 20px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      background: mode === m ? 'var(--surface-card)' : 'transparent',
      boxShadow: mode === m ? 'var(--shadow-xs)' : 'none',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: mode === m ? 'var(--text-strong)' : 'var(--text-muted)'
    }
  }, label))), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 6px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, signup ? 'Create your account' : 'Welcome back'), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-base)'
    }
  }, signup ? 'Book in minutes or start hosting your home.' : 'Log in to manage your trips and listings.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, signup && /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "user"
    }),
    placeholder: "Marta Gil"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "mail"
    }),
    placeholder: "hola@ebrostay.es"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "lock"
    }),
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    trailing: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "eye",
      style: {
        width: 18,
        height: 18,
        cursor: 'pointer'
      }
    })
  }), signup ? /*#__PURE__*/React.createElement(Checkbox, {
    label: /*#__PURE__*/React.createElement("span", null, "I agree to the ", /*#__PURE__*/React.createElement("a", {
      style: {
        color: 'var(--text-brand)',
        fontWeight: 600
      }
    }, "Terms"), " and ", /*#__PURE__*/React.createElement("a", {
      style: {
        color: 'var(--text-brand)',
        fontWeight: 600
      }
    }, "Privacy Policy")),
    checked: agree,
    onChange: setAgree
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Remember me",
    checked: agree,
    onChange: setAgree
  }), /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'var(--text-brand)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      cursor: 'pointer'
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true
  }, signup ? 'Create account' : 'Log in')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      margin: '22px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      fontSize: 'var(--text-sm)'
    }
  }, "or continue with"), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "globe"
    })
  }, "Google"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "apple"
    })
  }, "Apple")), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      marginTop: 24,
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, signup ? 'Already have an account? ' : "New to Ebrostay? ", /*#__PURE__*/React.createElement("a", {
    onClick: () => setMode(signup ? 'login' : 'signup'),
    style: {
      color: 'var(--text-brand)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, signup ? 'Log in' : 'Sign up')))), done && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: '50%',
      bottom: 28,
      transform: 'translateX(-50%)',
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--surface-inverse)',
      color: '#fff',
      padding: '14px 20px',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-xl)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-circle-2",
    style: {
      width: 20,
      height: 20,
      color: 'var(--green-300)'
    }
  }), signup ? 'Account created — welcome to Ebrostay!' : 'Logged in — welcome back!'));
}
window.EbrAuthApp = EbrAuthApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/auth/Auth.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashApp.jsx
try { (() => {
// Ebrostay dashboard — App (exports window.EbrDashApp)
function EbrDashApp() {
  const [active, setActive] = React.useState('Overview');
  React.useEffect(() => {
    const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 30);
    return () => clearTimeout(t);
  });
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);
  const titles = {
    Overview: 'Overview',
    Listings: 'Your listings',
    Calendar: 'Calendar',
    Bookings: 'Bookings',
    Earnings: 'Earnings',
    Messages: 'Messages',
    Settings: 'Settings'
  };
  let view;
  if (active === 'Overview') view = /*#__PURE__*/React.createElement(EbrOverview, {
    goBookings: () => setActive('Bookings')
  });else if (active === 'Listings') view = /*#__PURE__*/React.createElement(EbrListings, null);else if (active === 'Calendar') view = /*#__PURE__*/React.createElement(EbrCalendar, null);else if (active === 'Bookings') view = /*#__PURE__*/React.createElement(EbrBookings, null);else if (active === 'Earnings') view = /*#__PURE__*/React.createElement(EbrOverview, {
    goBookings: () => setActive('Bookings')
  });else view = /*#__PURE__*/React.createElement(EbrPlaceholder, {
    name: active
  });
  return /*#__PURE__*/React.createElement(EbrShell, {
    active: active,
    setActive: setActive,
    title: titles[active] || active
  }, view);
}
function EbrPlaceholder({
  name
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 360,
      color: 'var(--text-muted)',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "construction",
    style: {
      width: 36,
      height: 36
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-md)'
    }
  }, name, " \u2014 coming soon in this kit."));
}
window.EbrDashApp = EbrDashApp;
window.EbrPlaceholder = EbrPlaceholder;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Overview.jsx
try { (() => {
// Ebrostay dashboard — Overview (exports window.EbrOverview)
function EbrOverview({
  goBookings
}) {
  const {
    Card,
    Badge,
    Avatar,
    Button
  } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DASH;
  const max = Math.max(...D.earnings);
  const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const statusTone = {
    Confirmed: 'success',
    Pending: 'warning',
    Completed: 'neutral'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, D.stats.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.key,
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-md)',
      background: 'var(--brand-soft)',
      color: 'var(--brand)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon,
    style: {
      width: 19,
      height: 19
    }
  })), s.up !== null ? /*#__PURE__*/React.createElement(Badge, {
    tone: s.up ? 'success' : 'danger'
  }, s.delta) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, s.delta)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-strong)'
    }
  }, s.value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 18,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)'
    }
  }, "Earnings"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap',
      flex: 'none'
    }
  }, "Last 12 months")), /*#__PURE__*/React.createElement(EbrEarningsChart, {
    data: D.earnings,
    months: months,
    max: max,
    highlight: 8
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)'
    }
  }, "Your listings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, D.listings.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      backgroundImage: `url(${l.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, l.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, l.status === 'Listed' ? `${l.occ}% booked` : 'Snoozed')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  }, "\u20AC", l.price)))))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)'
    }
  }, "Upcoming bookings"), /*#__PURE__*/React.createElement("a", {
    onClick: goBookings,
    style: {
      color: 'var(--text-brand)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      cursor: 'pointer'
    }
  }, "View all")), /*#__PURE__*/React.createElement(EbrBookingTable, {
    rows: D.bookings.slice(0, 4),
    tones: statusTone
  })));
}
function EbrBookingTable({
  rows,
  tones
}) {
  const {
    Badge,
    Avatar
  } = window.EbrostayDesignSystem_8b1b13;
  const th = {
    textAlign: 'left',
    padding: '12px 12px',
    fontSize: 'var(--text-xs)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '.06em',
    color: 'var(--text-subtle)',
    borderBottom: '1px solid var(--border-subtle)'
  };
  const td = {
    padding: '14px 12px',
    fontSize: 'var(--text-sm)',
    color: 'var(--text-body)',
    borderBottom: '1px solid var(--border-subtle)'
  };
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Guest"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Listing"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Dates"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Ref"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "Total"), /*#__PURE__*/React.createElement("th", {
    style: {
      ...th,
      textAlign: 'right'
    }
  }, "Status"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(b => /*#__PURE__*/React.createElement("tr", {
    key: b.ref
  }, /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: b.guest,
    size: "xs"
  }), " ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-strong)'
    }
  }, b.guest))), /*#__PURE__*/React.createElement("td", {
    style: td
  }, b.listing), /*#__PURE__*/React.createElement("td", {
    style: td
  }, b.inDate, " \u2013 ", b.outDate, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)'
    }
  }, "\xB7 ", b.nights, "n")), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, b.ref), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right',
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "\u20AC", b.total), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tones[b.status] || 'neutral',
    dot: b.status === 'Confirmed'
  }, b.status))))));
}
window.EbrOverview = EbrOverview;
window.EbrBookingTable = EbrBookingTable;

// Refined earnings chart — gridlines, axis, rounded gradient bars, hover tooltip.
function EbrEarningsChart({
  data,
  months,
  max,
  highlight
}) {
  const [hover, setHover] = React.useState(null);
  const H = 188;
  const top = Math.ceil(max / 1000) * 1000;
  const ticks = [0, 0.25, 0.5, 0.75, 1].map(f => Math.round(top * f));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'space-between',
      height: H,
      paddingBottom: 22
    }
  }, ticks.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontSize: 10,
      fontFamily: 'var(--font-mono)',
      color: 'var(--text-subtle)',
      lineHeight: 1
    }
  }, "\u20AC", t >= 1000 ? t / 1000 + 'k' : t))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: `0 0 22px 0`,
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'space-between'
    }
  }, ticks.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      opacity: i === 0 ? 1 : 0.6
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      gap: '4%',
      height: H,
      paddingBottom: 22
    }
  }, data.map((v, i) => {
    const on = hover === i || hover === null && i === highlight;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(null),
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer',
        height: '100%',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        maxWidth: 30,
        height: `${v / top * (H - 22)}px`,
        borderRadius: '7px 7px 3px 3px',
        background: on ? 'linear-gradient(180deg, var(--green-400), var(--brand))' : 'var(--green-200)',
        boxShadow: on ? '0 6px 14px rgba(31,138,87,.28)' : 'none',
        transition: 'background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: on ? 'var(--text-body)' : 'var(--text-subtle)',
        fontFamily: 'var(--font-mono)',
        fontWeight: on ? 600 : 400
      }
    }, months[i]));
  })), hover !== null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -6,
      left: `calc(${(hover + 0.5) / data.length * 100}% )`,
      transform: 'translate(-50%, -100%)',
      background: 'var(--surface-inverse)',
      color: '#fff',
      padding: '6px 11px',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-lg)',
      pointerEvents: 'none',
      zIndex: 2
    }
  }, "\u20AC", data[hover].toLocaleString()))));
}
window.EbrEarningsChart = EbrEarningsChart;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Shell.jsx
try { (() => {
// Ebrostay dashboard — Shell: sidebar + topbar (exports window.EbrShell)
function EbrShell({
  active,
  setActive,
  title,
  children
}) {
  const {
    Avatar,
    IconButton,
    Button,
    Input
  } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DASH;
  const [dark, setDark] = React.useState(() => document.documentElement.dataset.theme === 'dark');
  React.useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : '';
    const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 20);
    return () => clearTimeout(t);
  }, [dark]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '248px 1fr',
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--surface-card)',
      borderRight: '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0,
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 22px 14px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.svg",
    alt: "Ebrostay",
    height: "26"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: 1
    }
  }, D.nav.map(([icon, label]) => /*#__PURE__*/React.createElement(EbrNavItem, {
    key: label,
    icon: icon,
    label: label,
    on: label === active,
    onClick: () => setActive(label)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: D.host.name,
    size: "sm",
    status: "online"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, D.host.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, "Superhost")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      height: 'var(--header-h)',
      background: 'var(--glass-strong)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-snug)',
      flex: 1
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "search"
    }),
    placeholder: "Search bookings, guests\u2026"
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: dark ? 'Light mode' : 'Dark mode',
    variant: "ghost",
    round: true,
    onClick: () => setDark(d => !d)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": dark ? 'sun' : 'moon'
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications",
    variant: "secondary"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "plus"
    })
  }, "New listing")), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 28,
      flex: 1
    }
  }, children)));
}
window.EbrShell = EbrShell;
function EbrNavItem({
  icon,
  label,
  on,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const bg = on ? 'var(--brand-soft)' : hover ? 'var(--surface-sunken)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 14px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-md)',
      textAlign: 'left',
      width: '100%',
      backgroundColor: bg,
      color: on ? 'var(--text-brand)' : 'var(--text-body)',
      fontWeight: on ? 700 : 500,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 19,
      height: 19
    }
  }), " ", label);
}
window.EbrNavItem = EbrNavItem;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Views.jsx
try { (() => {
// Ebrostay dashboard — Listings, Calendar, Bookings (exports window.EbrListings/EbrCalendar/EbrBookings)

function EbrListings({
  onOpen
}) {
  const {
    Card,
    Badge,
    Button,
    IconButton,
    Rating
  } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DASH;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 18
    }
  }, D.listings.map(l => /*#__PURE__*/React.createElement(Card, {
    key: l.id,
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 132,
      height: 112,
      borderRadius: 'var(--radius-md)',
      backgroundImage: `url(${l.img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-md)',
      color: 'var(--text-strong)',
      lineHeight: 1.15
    }
  }, l.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, l.area)), /*#__PURE__*/React.createElement(Badge, {
    tone: l.status === 'Listed' ? 'success' : 'neutral',
    dot: true
  }, l.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "\u20AC", l.price, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 400
    }
  }, " / night")), /*#__PURE__*/React.createElement(Rating, {
    value: l.rating,
    size: 13,
    showValue: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", null, "Occupancy"), /*#__PURE__*/React.createElement("span", null, l.occ, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 7,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-sunken)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${l.occ}%`,
      height: '100%',
      background: l.occ ? 'var(--brand)' : 'transparent',
      borderRadius: 'var(--radius-pill)'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "pencil"
    }),
    onClick: () => onOpen && onOpen(l)
  }, "Edit"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "calendar-days"
    })
  }, "Calendar"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "More",
    variant: "ghost",
    size: "sm"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "more-horizontal"
  })))))));
}
function EbrCalendar() {
  const {
    Card,
    Badge
  } = window.EbrostayDesignSystem_8b1b13;
  // June 2026 starts on Monday. Booked ranges highlighted.
  const booked = {
    '12': 1,
    '13': 2,
    '14': 2,
    '15': 1,
    '16': 3,
    '17': 3,
    '18': 2,
    '20': 1,
    '21': 1,
    '22': 1
  };
  const dows = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const cells = [];
  for (let d = 1; d <= 30; d++) cells.push(d);
  const tones = {
    1: 'var(--green-100)',
    2: 'var(--clay-100)',
    3: 'var(--blue-50)'
  };
  return /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)'
    }
  }, "June 2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: 'var(--green-100)'
    }
  }), "Sunny loft"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: 'var(--clay-100)'
    }
  }), "River-view"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 3,
      background: 'var(--blue-50)'
    }
  }), "Independencia"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 8
    }
  }, dows.map(d => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--text-subtle)',
      padding: '0 0 6px'
    }
  }, d)), cells.map(d => {
    const b = booked[String(d)];
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        aspectRatio: '1 / 0.82',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-subtle)',
        background: b ? tones[b] : 'var(--surface-card)',
        padding: 8,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-sm)',
        fontWeight: b ? 700 : 500,
        color: b ? 'var(--text-strong)' : 'var(--text-muted)'
      }
    }, d), b && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-xs)',
        color: 'var(--text-body)'
      }
    }, "Booked"));
  })));
}
function EbrBookings() {
  const {
    Card,
    Tabs
  } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DASH;
  const [tab, setTab] = React.useState('all');
  const tones = {
    Confirmed: 'success',
    Pending: 'warning',
    Completed: 'neutral'
  };
  const rows = tab === 'all' ? D.bookings : D.bookings.filter(b => b.status.toLowerCase() === tab);
  return /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'all',
      label: 'All'
    }, {
      value: 'confirmed',
      label: 'Confirmed'
    }, {
      value: 'pending',
      label: 'Pending'
    }, {
      value: 'completed',
      label: 'Completed'
    }]
  })), /*#__PURE__*/React.createElement(EbrBookingTable, {
    rows: rows,
    tones: tones
  }));
}
window.EbrListings = EbrListings;
window.EbrCalendar = EbrCalendar;
window.EbrBookings = EbrBookings;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Views.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/data.js
try { (() => {
// Ebrostay host dashboard data (window.EBR_DASH)
window.EBR_DASH = {
  host: {
    name: "Marta Gil",
    initials: "MG"
  },
  stats: [{
    key: "earnings",
    label: "Earnings this month",
    value: "€4,820",
    delta: "+12%",
    up: true,
    icon: "wallet"
  }, {
    key: "occupancy",
    label: "Occupancy",
    value: "78%",
    delta: "+6%",
    up: true,
    icon: "calendar-check"
  }, {
    key: "checkins",
    label: "Upcoming check-ins",
    value: "5",
    delta: "next 7 days",
    up: null,
    icon: "log-in"
  }, {
    key: "rating",
    label: "Overall rating",
    value: "4.90",
    delta: "126 reviews",
    up: null,
    icon: "star"
  }],
  // 12 months of earnings for the bar chart (in €)
  earnings: [2100, 2480, 2950, 3300, 3120, 3680, 4200, 4650, 4820, 4100, 3600, 3900],
  listings: [{
    id: "tubo",
    title: "Sunny loft in El Tubo",
    area: "Casco Histórico",
    img: "https://picsum.photos/seed/ebro-tubo/240/200",
    price: 118,
    status: "Listed",
    occ: 82,
    rating: 4.92
  }, {
    id: "river",
    title: "River-view flat near the Ebro",
    area: "Las Fuentes",
    img: "https://picsum.photos/seed/ebro-river/240/200",
    price: 134,
    status: "Listed",
    occ: 74,
    rating: 4.87
  }, {
    id: "indep",
    title: "Elegant flat on Independencia",
    area: "Centro",
    img: "https://picsum.photos/seed/ebro-indep/240/200",
    price: 156,
    status: "Listed",
    occ: 88,
    rating: 4.95
  }, {
    id: "delic",
    title: "Modern duplex in Delicias",
    area: "Delicias",
    img: "https://picsum.photos/seed/ebro-delicias/240/200",
    price: 108,
    status: "Snoozed",
    occ: 0,
    rating: 4.83
  }],
  bookings: [{
    ref: "EBR-4821-ZGZ",
    guest: "Carlos M.",
    listing: "Sunny loft in El Tubo",
    inDate: "12 Jun",
    outDate: "15 Jun",
    nights: 3,
    total: 389,
    status: "Confirmed"
  }, {
    ref: "EBR-4822-ZGZ",
    guest: "Élodie R.",
    listing: "River-view flat near the Ebro",
    inDate: "14 Jun",
    outDate: "18 Jun",
    nights: 4,
    total: 612,
    status: "Confirmed"
  }, {
    ref: "EBR-4823-ZGZ",
    guest: "Tom B.",
    listing: "Elegant flat on Independencia",
    inDate: "16 Jun",
    outDate: "19 Jun",
    nights: 3,
    total: 524,
    status: "Pending"
  }, {
    ref: "EBR-4819-ZGZ",
    guest: "Núria S.",
    listing: "Sunny loft in El Tubo",
    inDate: "20 Jun",
    outDate: "23 Jun",
    nights: 3,
    total: 389,
    status: "Confirmed"
  }, {
    ref: "EBR-4810-ZGZ",
    guest: "Hannah K.",
    listing: "Modern duplex in Delicias",
    inDate: "02 Jun",
    outDate: "05 Jun",
    nights: 3,
    total: 359,
    status: "Completed"
  }],
  nav: [["layout-dashboard", "Overview"], ["home", "Listings"], ["calendar-days", "Calendar"], ["receipt-text", "Bookings"], ["wallet", "Earnings"], ["message-square", "Messages"], ["settings", "Settings"]]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Detail.jsx
try { (() => {
// Ebrostay website — Property detail (exports window.EbrDetail)
function EbrDetail({
  id,
  onBack,
  onReserve
}) {
  const {
    Tabs,
    AmenityChip,
    Avatar,
    Badge,
    Button,
    Select,
    Rating,
    IconButton
  } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DATA;
  const l = D.listings.find(x => x.id === id) || D.listings[0];
  const [tab, setTab] = React.useState('amenities');
  const gallery = [0, 1, 2, 3, 4].map(n => `https://picsum.photos/seed/${l.id}-${n}/700/560`);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '20px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-left",
    style: {
      width: 16,
      height: 16
    }
  }), " All stays"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      margin: '6px 0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-3xl)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1.05
    }
  }, l.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Rating, {
    value: l.rating,
    count: l.reviews
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 14,
      height: 14,
      verticalAlign: '-2px'
    }
  }), " ", l.area, ", Zaragoza"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "share"
    })
  }, "Share"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "heart"
    })
  }, "Save"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 8,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      height: 420
    }
  }, gallery.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      gridColumn: i === 0 ? '1' : undefined,
      gridRow: i === 0 ? '1 / 3' : undefined,
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }
  }, i === 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 12,
      bottom: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    solid: true,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "image"
    })
  }, "Show all photos"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 48,
      marginTop: 28,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: 22,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)'
    }
  }, l.type, " hosted by ", l.host), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-base)'
    }
  }, l.guests, " guests \xB7 ", l.beds, " bedroom", l.beds > 1 ? 's' : '', " \xB7 ", l.baths, " bath", l.baths > 1 ? 's' : '')), /*#__PURE__*/React.createElement(Avatar, {
    name: l.host,
    size: "xl",
    ring: l.superhost
  })), l.superhost && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: '18px 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "shield-check",
    style: {
      width: 26,
      height: 26,
      color: 'var(--brand)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-strong)'
    }
  }, l.host, " is a Superhost"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, "Experienced, highly rated hosts committed to great stays."))), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.65,
      margin: '22px 0'
    }
  }, l.desc), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'amenities',
      label: 'Amenities'
    }, {
      value: 'reviews',
      label: 'Reviews'
    }, {
      value: 'location',
      label: 'Location'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 22
    }
  }, tab === 'amenities' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '18px 24px'
    }
  }, l.amenities.map(([icon, label]) => /*#__PURE__*/React.createElement(AmenityChip, {
    key: label,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": icon
    }),
    label: label
  }))), tab === 'reviews' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 22
    }
  }, [['Carlos', 'A perfect base for exploring the old town. Spotless and exactly as pictured.'], ['Élodie', 'Marta was a wonderful host — great tips for tapas in El Tubo.'], ['Tom', 'Quiet, comfortable and walkable to everything. Would book again.'], ['Núria', 'Lovely light in the mornings and a very easy self check-in.']].map(([n, t]) => /*#__PURE__*/React.createElement("div", {
    key: n
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: n,
    size: "sm"
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-strong)',
      fontSize: 'var(--text-sm)'
    }
  }, n)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.6
    }
  }, t)))), tab === 'location' && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 260,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      backgroundImage: 'url(https://picsum.photos/seed/zgz-detail-map/1000/520?grayscale)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    solid: true,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "map-pin"
    })
  }, l.area, ", Zaragoza")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 'calc(var(--header-h) + 16px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 'var(--text-2xl)',
      color: 'var(--text-strong)'
    }
  }, "\u20AC", l.price), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, " / night")), /*#__PURE__*/React.createElement(Rating, {
    value: l.rating,
    count: l.reviews,
    size: 14
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 0,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      margin: '16px 0'
    }
  }, [['Check in', '12 Jun 2026'], ['Check out', '15 Jun 2026']].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: '10px 14px',
      borderRight: i === 0 ? '1px solid var(--border-default)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'var(--text-strong)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      marginTop: 2
    }
  }, v)))), /*#__PURE__*/React.createElement(Select, {
    defaultValue: String(Math.min(2, l.guests)),
    containerStyle: {
      marginBottom: 16
    }
  }, Array.from({
    length: l.guests
  }).map((_, i) => /*#__PURE__*/React.createElement("option", {
    key: i,
    value: i + 1
  }, i + 1, " guest", i > 0 ? 's' : ''))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => onReserve(l)
  }, "Reserve"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      margin: '12px 0 18px'
    }
  }, "You won't be charged yet"), [['€' + l.price + ' × 3 nights', '€' + l.price * 3], ['Cleaning fee', '€35'], ['Ebrostay service fee', '€' + Math.round(l.price * 3 * 0.12)]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '6px 0',
      color: 'var(--text-body)',
      fontSize: 'var(--text-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: 'underline',
      textDecorationColor: 'var(--border-default)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '14px 0 0',
      marginTop: 8,
      borderTop: '1px solid var(--border-subtle)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "\u20AC", l.price * 3 + 35 + Math.round(l.price * 3 * 0.12)))), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--text-brand)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 14,
      height: 14,
      verticalAlign: '-2px'
    }
  }), " ", l.note || 'Free cancellation up to 48h before check-in'))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 48
    }
  }), /*#__PURE__*/React.createElement(EbrFooter, null));
}
window.EbrDetail = EbrDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Ebrostay website — Header (exports window.EbrHeader)
function EbrHeader({
  onHome,
  compact,
  search,
  onSearchSegment
}) {
  const {
    SearchBar,
    Button,
    Avatar,
    IconButton
  } = window.EbrostayDesignSystem_8b1b13;
  const [menu, setMenu] = React.useState(false);
  const [dark, setDark] = React.useState(() => document.documentElement.dataset.theme === 'dark');
  React.useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : '';
    const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 20);
    return () => clearTimeout(t);
  }, [dark]);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--glass-strong)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      borderBottom: 'var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '0 28px',
      height: 'var(--header-h)',
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onHome,
    style: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dark ? '../../assets/logo-wordmark-inverse.svg' : '../../assets/logo-wordmark.svg',
    alt: "Ebrostay",
    height: "30"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    }
  }, compact && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(520px, 100%)'
    }
  }, /*#__PURE__*/React.createElement(SearchBar, {
    compact: true,
    where: search?.where,
    checkIn: search?.checkIn,
    guests: search?.guests,
    onSegment: onSearchSegment,
    onSearch: () => onSearchSegment && onSearchSegment('where')
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: dark ? 'Light mode' : 'Dark mode',
    variant: "ghost",
    round: true,
    onClick: () => setDark(d => !d)
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": dark ? 'sun' : 'moon'
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Become a host"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenu(!menu),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '5px 6px 5px 14px',
      height: 44,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "menu",
    style: {
      width: 18,
      height: 18,
      color: 'var(--text-body)'
    }
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "You",
    size: "sm"
  })), menu && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 52,
      width: 220,
      background: 'var(--surface-card)',
      border: 'var(--hairline)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 8
    }
  }, ['Sign up', 'Log in', '—', 'Host your home', 'Help centre'].map((t, i) => t === '—' ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 1,
      background: 'var(--border-subtle)',
      margin: '8px 0'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-sunken)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, t)))))));
}
window.EbrHeader = EbrHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
// Ebrostay website — Home screen (exports window.EbrHome)

// Shared scroll-reveal hook — adds .is-in to .ebr-reveal elements as they enter.
function useEbrReveal(deps) {
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll('.ebr-reveal:not(.is-in)'));
    if (!els.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, deps || []);
}
window.useEbrReveal = useEbrReveal;
function EbrHome({
  onOpen,
  search,
  setSearch,
  onSearch
}) {
  const {
    SearchBar,
    PropertyCard,
    Tag,
    Button
  } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DATA;
  const [cat, setCat] = React.useState(0);
  useEbrReveal([]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '24px auto 0',
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      position: 'relative',
      height: 'clamp(460px, 64vh, 580px)',
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(https://picsum.photos/seed/zaragoza-ebro/1700/1000)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'saturate(1.08) contrast(1.02) brightness(1.02)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(74,36,20,.12) 0%, rgba(10,51,36,.10) 40%, rgba(10,51,36,.66) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "ebr-reveal is-in",
    style: {
      position: 'relative',
      padding: 'clamp(28px, 5vw, 64px)',
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      opacity: .92
    }
  }, "Stays on the Ebro"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '12px 0 0',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-5xl)',
      lineHeight: 1.02,
      letterSpacing: 'var(--tracking-tight)',
      textWrap: 'balance'
    }
  }, "Book your home in Zaragoza in minutes"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      color: '#fff',
      fontSize: 'var(--text-md)',
      maxWidth: 500,
      opacity: .94,
      lineHeight: 1.55
    }
  }, "Hand-picked apartments and rooms across the city \u2014 from El Tubo to the river. No surprises, free cancellation."))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1060,
      margin: '-46px auto 0',
      position: 'relative',
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement(SearchBar, {
    where: search.where,
    checkIn: search.checkIn,
    checkOut: search.checkOut,
    guests: search.guests,
    onSegment: k => setSearch({
      ...search,
      _open: k
    }),
    onSearch: onSearch
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '44px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      overflowX: 'auto',
      paddingBottom: 6
    }
  }, D.categories.map(([icon, label], i) => /*#__PURE__*/React.createElement(Tag, {
    key: label,
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": icon
    }),
    selected: cat === i,
    onClick: () => setCat(i)
  }, label)))), /*#__PURE__*/React.createElement("section", {
    className: "ebr-reveal",
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '40px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-3xl)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Popular stays in Zaragoza"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-md)'
    }
  }, "Loved by recent guests this season.")), /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'var(--text-brand)',
      fontWeight: 600,
      fontSize: 'var(--text-base)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    },
    onClick: onSearch
  }, "Show all \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(268px, 1fr))',
      gap: 32
    }
  }, D.listings.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    className: "ebr-reveal",
    style: {
      '--i': i % 4
    }
  }, /*#__PURE__*/React.createElement(PropertyCard, {
    image: l.img,
    title: l.title,
    location: l.area,
    rating: l.rating,
    reviews: l.reviews,
    badge: l.badge || undefined,
    badgeTone: l.badgeTone,
    note: l.note || undefined,
    price: l.price,
    onClick: () => onOpen(l.id)
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "ebr-reveal",
    style: {
      maxWidth: 'var(--container-wide)',
      margin: 'var(--section-gap) auto 0',
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-2xl)',
      overflow: 'hidden',
      background: 'var(--green-900)',
      color: '#fff',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      minHeight: 340
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(32px, 4.5vw, 64px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--green-300)',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)'
    }
  }, "For property owners"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-4xl)',
      lineHeight: 1.04,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Earn from your Zaragoza home"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 30px',
      color: 'rgba(255,255,255,.82)',
      fontSize: 'var(--text-md)',
      maxWidth: 440,
      lineHeight: 1.55
    }
  }, "List in minutes, set your own rules, and let us handle bookings, payments and guest messaging."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right"
    })
  }, "Start hosting"))), /*#__PURE__*/React.createElement("div", {
    style: {
      backgroundImage: 'url(https://picsum.photos/seed/ebro-host/900/760)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'saturate(1.06)'
    }
  }))), /*#__PURE__*/React.createElement(EbrFooter, null));
}
function EbrFooter() {
  const cols = [['Explore', ['Stays in Zaragoza', 'El Tubo', 'Casco Histórico', 'River apartments']], ['Hosting', ['List your home', 'Host resources', 'Community', 'Responsible hosting']], ['Support', ['Help centre', 'Cancellation options', 'Safety', 'Contact us']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 'var(--section-gap)',
      borderTop: 'var(--hairline)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '56px 28px',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.svg",
    alt: "Ebrostay",
    height: "28"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      maxWidth: 240,
      lineHeight: 1.55
    }
  }, "Homes and rooms across Zaragoza, booked in minutes.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  }, h), items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it,
    style: {
      padding: '6px 0',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      cursor: 'pointer'
    }
  }, it))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: 'var(--hairline)',
      padding: '20px 28px',
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      color: 'var(--text-subtle)',
      fontSize: 'var(--text-xs)'
    }
  }, "\xA9 2026 Ebrostay \xB7 Zaragoza, Espa\xF1a \xB7 Privacy \xB7 Terms"));
}
window.EbrHome = EbrHome;
window.EbrFooter = EbrFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Results.jsx
try { (() => {
// Ebrostay website — Search results (exports window.EbrResults)
function EbrResults({
  onOpen,
  search,
  setSearch,
  onSearch
}) {
  const {
    PropertyCard,
    Tag,
    Button,
    Switch
  } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DATA;
  const [instant, setInstant] = React.useState(false);
  const filters = ['Whole place', 'Private room', 'Free cancellation', 'Superhost', 'Parking', 'Wi-Fi'];
  const [active, setActive] = React.useState(['Free cancellation']);
  const toggle = f => setActive(a => a.includes(f) ? a.filter(x => x !== f) : [...a, f]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '16px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: active.includes(f),
    onClick: () => toggle(f)
  }, f)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Instant book",
    checked: instant,
    onChange: setInstant
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "sliders-horizontal"
    })
  }, "Filters")))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-wide)',
      margin: '0 auto',
      padding: '24px 28px',
      display: 'grid',
      gridTemplateColumns: '1.55fr 1fr',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--tracking-snug)'
    }
  }, D.listings.length, " stays in ", search.where || 'Zaragoza'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)'
    }
  }, search.checkIn || 'Any dates', " \xB7 ", search.guests || '2 guests')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 26
    }
  }, D.listings.map(l => /*#__PURE__*/React.createElement(PropertyCard, {
    key: l.id,
    image: l.img,
    title: l.title,
    location: l.area,
    rating: l.rating,
    reviews: l.reviews,
    badge: l.badge || undefined,
    badgeTone: l.badgeTone,
    note: l.note || undefined,
    price: l.price,
    onClick: () => onOpen(l.id)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 'calc(var(--header-h) + 16px)',
      height: 'calc(100vh - var(--header-h) - 48px)',
      minHeight: 460,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      background: 'linear-gradient(135deg, #e7efe9, #eef3ea)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(https://picsum.photos/seed/zgz-map/900/1100?grayscale)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: .35
    }
  }), D.listings.slice(0, 5).map((l, i) => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    onClick: () => onOpen(l.id),
    style: {
      position: 'absolute',
      top: `${22 + i * 14}%`,
      left: `${18 + i * 23 % 60}%`,
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'scale(1.08)';
      e.currentTarget.style.background = 'var(--brand)';
      e.currentTarget.style.color = '#fff';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.background = 'var(--surface-card)';
      e.currentTarget.style.color = 'var(--text-strong)';
    }
  }, "\u20AC", l.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 16,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--glass-strong)',
      backdropFilter: 'blur(var(--glass-blur))',
      WebkitBackdropFilter: 'blur(var(--glass-blur))',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, "Map of Zaragoza \xB7 ", D.listings.length, " stays"))), /*#__PURE__*/React.createElement(EbrFooter, null));
}
window.EbrResults = EbrResults;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Results.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteApp.jsx
try { (() => {
// Ebrostay website — App shell (exports window.EbrApp)
function EbrApp() {
  const {
    Button
  } = window.EbrostayDesignSystem_8b1b13;
  const [screen, setScreen] = React.useState('home'); // home | results | detail
  const [openId, setOpenId] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const [search, setSearch] = React.useState({
    where: 'Zaragoza',
    checkIn: '12 Jun',
    checkOut: '15 Jun',
    guests: '2 guests',
    _open: null
  });
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen, openId]);
  React.useEffect(() => {
    const t = setTimeout(() => window.lucide && window.lucide.createIcons(), 30);
    return () => clearTimeout(t);
  });
  const goResults = () => {
    setSearch(s => ({
      ...s,
      _open: null
    }));
    setScreen('results');
  };
  const openListing = id => {
    setOpenId(id);
    setScreen('detail');
  };
  const reserve = l => {
    setToast(`Reservation requested — ${l.title}. ${l.host} will confirm shortly.`);
    setTimeout(() => setToast(null), 4200);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(EbrHeader, {
    compact: screen !== 'home',
    search: search,
    onHome: () => setScreen('home'),
    onSearchSegment: () => setScreen('results')
  }), screen === 'home' && /*#__PURE__*/React.createElement(EbrHome, {
    onOpen: openListing,
    search: search,
    setSearch: setSearch,
    onSearch: goResults
  }), screen === 'results' && /*#__PURE__*/React.createElement(EbrResults, {
    onOpen: openListing,
    search: search,
    setSearch: setSearch,
    onSearch: goResults
  }), screen === 'detail' && /*#__PURE__*/React.createElement(EbrDetail, {
    id: openId,
    onBack: () => setScreen('results'),
    onReserve: reserve
  }), search._open && screen === 'home' && /*#__PURE__*/React.createElement(SearchPopover, {
    search: search,
    setSearch: setSearch,
    onDone: goResults
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: '50%',
      bottom: 28,
      transform: 'translateX(-50%)',
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--green-900)',
      color: '#fff',
      padding: '14px 20px',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-xl)',
      fontSize: 'var(--text-sm)',
      maxWidth: 460
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-circle-2",
    style: {
      width: 20,
      height: 20,
      color: 'var(--green-300)',
      flex: 'none'
    }
  }), toast));
}
function SearchPopover({
  search,
  setSearch,
  onDone
}) {
  const {
    Button
  } = window.EbrostayDesignSystem_8b1b13;
  const D = window.EBR_DATA;
  const open = search._open;
  const close = () => setSearch(s => ({
    ...s,
    _open: null
  }));
  const setGuests = n => setSearch(s => ({
    ...s,
    guests: `${n} guest${n > 1 ? 's' : ''}`,
    _guestN: n
  }));
  const n = search._guestN || 2;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: close,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      zIndex: 41,
      top: 360,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'min(420px, 92vw)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      padding: 20
    }
  }, open === 'where' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Search by area"), ['Zaragoza (all)', 'Casco Histórico', 'El Pilar', 'Centro', 'Las Fuentes', 'Delicias'].map(a => /*#__PURE__*/React.createElement("div", {
    key: a,
    onClick: () => {
      setSearch(s => ({
        ...s,
        where: a.replace(' (all)', ''),
        _open: null
      }));
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      color: 'var(--text-body)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-sunken)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent'
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 16,
      height: 16,
      color: 'var(--brand)'
    }
  }), " ", a))), (open === 'checkIn' || open === 'checkOut') && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Choose dates"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 6
    }
  }, Array.from({
    length: 21
  }).map((_, i) => {
    const day = 9 + i;
    const sel = day >= 12 && day <= 15;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setSearch(s => ({
        ...s,
        checkIn: '12 Jun',
        checkOut: '15 Jun',
        _open: null
      })),
      style: {
        aspectRatio: '1',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        background: sel ? 'var(--brand-soft)' : 'transparent',
        color: sel ? 'var(--text-brand)' : 'var(--text-body)',
        fontWeight: sel ? 700 : 400
      }
    }, day);
  }))), open === 'guests' && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, "Guests"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, "Guests"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setGuests(Math.max(1, n - 1)),
    style: stepBtn
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 20,
      textAlign: 'center',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, n), /*#__PURE__*/React.createElement("button", {
    onClick: () => setGuests(Math.min(8, n + 1)),
    style: stepBtn
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: onDone
  }, "Search")))));
}
const stepBtn = {
  width: 34,
  height: 34,
  borderRadius: '50%',
  border: '1px solid var(--border-default)',
  background: 'var(--surface-card)',
  cursor: 'pointer',
  fontSize: 18,
  color: 'var(--text-body)',
  lineHeight: 1
};
window.EbrApp = EbrApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Ebrostay sample listing data (window.EBR_DATA)
window.EBR_DATA = {
  city: "Zaragoza",
  listings: [{
    id: "tubo",
    title: "Sunny loft in El Tubo",
    area: "Casco Histórico",
    img: "https://picsum.photos/seed/ebro-tubo/800/680",
    price: 118,
    rating: 4.92,
    reviews: 88,
    badge: "Superhost",
    guests: 2,
    beds: 1,
    baths: 1,
    type: "Entire loft",
    host: "Marta",
    superhost: true,
    note: "Free cancellation",
    desc: "A bright loft tucked into El Tubo's tapas lanes, two minutes from Plaza del Pilar. Restored beams, a sunny reading nook, and everything within a short walk.",
    amenities: [["wifi", "Fast Wi-Fi"], ["utensils", "Full kitchen"], ["wind", "Air conditioning"], ["washing-machine", "Washer"], ["tv", "Smart TV"], ["key-round", "Self check-in"]]
  }, {
    id: "pilar",
    title: "Studio by the Basilica",
    area: "El Pilar",
    img: "https://picsum.photos/seed/ebro-pilar/800/680",
    price: 92,
    rating: 4.80,
    reviews: 31,
    badge: "New",
    badgeTone: "accent",
    guests: 2,
    beds: 1,
    baths: 1,
    type: "Studio",
    host: "Jon",
    superhost: false,
    note: "",
    desc: "Compact, light-filled studio with a postcard view of the Basílica del Pilar. Ideal for a couple's weekend on the Ebro.",
    amenities: [["wifi", "Fast Wi-Fi"], ["coffee", "Coffee maker"], ["wind", "Air conditioning"], ["tv", "Smart TV"]]
  }, {
    id: "river",
    title: "River-view flat near the Ebro",
    area: "Las Fuentes",
    img: "https://picsum.photos/seed/ebro-river/800/680",
    price: 134,
    rating: 4.87,
    reviews: 64,
    badge: "",
    guests: 4,
    beds: 2,
    baths: 1,
    type: "Entire apartment",
    host: "Ana",
    superhost: true,
    note: "Free cancellation",
    desc: "Two-bedroom apartment with a wide balcony over the river. Great for families; parks and the riverside path are at your door.",
    amenities: [["wifi", "Fast Wi-Fi"], ["utensils", "Full kitchen"], ["car", "Free parking"], ["wind", "Air conditioning"], ["bath", "Bathtub"], ["waves", "River view"]]
  }, {
    id: "indep",
    title: "Elegant flat on Independencia",
    area: "Centro",
    img: "https://picsum.photos/seed/ebro-indep/800/680",
    price: 156,
    rating: 4.95,
    reviews: 142,
    badge: "Superhost",
    guests: 4,
    beds: 2,
    baths: 2,
    type: "Entire apartment",
    host: "Lucía",
    superhost: true,
    note: "Free cancellation",
    desc: "A classic apartment on the city's grandest avenue, steps from shops and cafés. High ceilings, original tile, and a cook's kitchen.",
    amenities: [["wifi", "Fast Wi-Fi"], ["utensils", "Full kitchen"], ["wind", "Air conditioning"], ["washing-machine", "Washer"], ["elevator", "Elevator"], ["tv", "Smart TV"]]
  }, {
    id: "aljaf",
    title: "Quiet rooms by the Aljafería",
    area: "La Almozara",
    img: "https://picsum.photos/seed/ebro-aljaf/800/680",
    price: 79,
    rating: 4.71,
    reviews: 22,
    badge: "",
    guests: 2,
    beds: 1,
    baths: 1,
    type: "Private room",
    host: "Diego",
    superhost: false,
    note: "",
    desc: "A calm private room in a hosted home a short stroll from the Aljafería palace. Perfect for a solo traveller or a budget weekend.",
    amenities: [["wifi", "Fast Wi-Fi"], ["coffee", "Coffee maker"], ["bike", "Bike storage"]]
  }, {
    id: "delicias",
    title: "Modern duplex in Delicias",
    area: "Delicias",
    img: "https://picsum.photos/seed/ebro-delicias/800/680",
    price: 108,
    rating: 4.83,
    reviews: 47,
    badge: "",
    guests: 3,
    beds: 2,
    baths: 1,
    type: "Entire duplex",
    host: "Sara",
    superhost: true,
    note: "Free cancellation",
    desc: "A bright two-floor duplex near the AVE station — ideal for business stays, with a desk, fast Wi-Fi and easy transit.",
    amenities: [["wifi", "Fast Wi-Fi"], ["utensils", "Full kitchen"], ["wind", "Air conditioning"], ["briefcase", "Workspace"], ["tv", "Smart TV"], ["washing-machine", "Washer"]]
  }],
  categories: [["building-2", "Historic centre"], ["waves", "River view"], ["sparkles", "New"], ["square-parking", "Parking"], ["dog", "Pet friendly"], ["briefcase", "For work"], ["bed-double", "Family"], ["wine", "Tapas nearby"]]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.RatingInline = __ds_scope.RatingInline;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.AmenityChip = __ds_scope.AmenityChip;

__ds_ns.PropertyCard = __ds_scope.PropertyCard;

__ds_ns.SearchBar = __ds_scope.SearchBar;

})();
