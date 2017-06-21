class Rule {
    ruleId = 0;
    rule = '';
    ruleKey = '';
    ruleValue = '';
    ruleType = null;
    $this = null;

    static RULE_LIST = [
        '$eq',
        '$lt',
        '$gt',
        '$lte',
        '$gte',
        '$neq',
        '$in',
        '$nin'
    ];
    static NUMBER = 'number';
    static ARRAY = 'array';
    static OBJECT = 'object';
    static TYPE_LIST = [
        Rule.NUMBER,
        Rule.ARRAY,
        Rule.OBJECT
    ];

    constructor(key, value) {
        this.ruleType = Rule.getRuleType(key);
        if (this.ruleType === Rule.OBJECT) {
            this.ruleKey = key;
            this.ruleValue = [];
            for (let item in value) {
                this.ruleValue.push(new Rule(item, value[item]));
            }
        }
        else {
            this.ruleKey = key;
            this.ruleValue = value;
        }
    }

    static getSelectList(ruleKey, type) {
        if (type) {
            return Rule.TYPE_LIST.map(value => {
                if (ruleKey === value) {
                    return `<option value="${value}" selected>${value}</option>`;
                }
                else {
                    return `<option value="${value}">${value}</option>`;
                }
            });
        }
        else {
            return Rule.RULE_LIST.map(value => {
                if (ruleKey === value) {
                    return `<option value="${value}" selected>${value}</option>`;
                }
                else {
                    return `<option value="${value}">${value}</option>`;
                }
            });
        }
    }

    static getRuleType(key) {
        if (Rule.RULE_LIST.indexOf(key) === -1) {
            return Rule.OBJECT;
        }
        else if (Rule.RULE_LIST.indexOf(key) <= 5) {
            return Rule.NUMBER;
        }
        else {
            return Rule.ARRAY;
        }
    }

    static init($el, rules) {
        if (!rules) {
            const $item = Rule.createDom['init']();
            $el.append($item);
        }
        else if (Object.getOwnPropertyNames(rules).length === 0) {
            // const $item = Rule.createDom[Rule.OBJECT]();
            $el.append();
        }
        else if (rules.ruleType === Rule.OBJECT) {
            for (let item of rules.ruleValue) {
                const $item = Rule.createDom[rules.ruleType](rules);
                $el.append($item);
                Rule.init($item.find('.rule-rule'), item);
            }
        }
        else {
            const $item = Rule.createDom[rules.ruleType](rules);
            $el.append($item);
        }
    }

    static addListener($el) {
        // TODO 添加字段
        $el.on('click', '.add-key-btn', function () {
            console.log('添加字段');

        });
        // TODO 添加规则
        $el.on('click', '.add-rule-btn', function () {
            console.log('添加规则');

        });
    }

    static createDom = {
        init () {
            return $(`<div class="add-key-btn">
                <button>添加字段</button>
            </div>`);
        }
        // [Rule.OBJECT](rule) {
        //     const keyList = Rule.getSelectList(rule.ruleKey);
        //     const typeList = Rule.getSelectList(rule.ruleType, true);
        //
        //     return $(`<div class="rule-type ${rule.ruleType}">
        //             <div class="rule-item ${rule.ruleKey}">
        //                 ${rule.ruleKey}
        //                 <select name="items">
        //                     ${keyList}
        //                 </select>
        //             </div>
        //             <div class="rule-value">
        //                 <select name="type">
        //                     ${typeList}
        //                 </select>
        //                 <div class="rule-rule ${rule.ruleKey}"></div>
        //             </div>
        //         </div>`);
        // return $(`<div class="rule-rule ${rule.ruleKey}"></div>`);
        // },
        // [Rule.NUMBER](rule) {
        //     const list = Rule.getSelectList(rule.ruleKey);
        //
        //     return $(`<div class="rule-type ${rule.ruleType}">
        //             <div class="rule-item ${rule.ruleKey}">
        //                 ${rule.ruleKey}
        //                 <select name="items">
        //                     ${list}
        //                 </select>
        //             </div>
        //             <div class="rule-value">
        //                 <input type="text" value="${rule.ruleValue}">
        //             </div>
        //         </div>`);
        // },
        // [Rule.ARRAY](rule) {
        //     const list = Rule.getSelectList(rule.ruleKey);
        //
        //     return $(`<div class="rule-type ${rule.ruleType}">
        //             <div class="rule-item ${rule.ruleKey}">
        //                 ${rule.ruleKey}
        //                 <select name="items">
        //                     ${list}
        //                 </select>
        //             </div>
        //             <div class="rule-value">
        //                 <input type="text" value="${rule.ruleValue.join(',')}">
        //             </div>
        //         </div>`);
        // },
    }
}

(function ($) {
    function rules(opt) {
        opt = $.extend({
            key: '',
            value: ''
        }, opt);
        const $this = this;
        console.log('this: ', $this);
        if (opt.value && Object.prototype.toString.call(opt.value).indexOf('String') > -1) {
            try {
                opt.value = JSON.parse(opt.value);
            } catch (e) {
                throw Error('参数无法转成Object对象');
            }
            const rules = new Rule(opt.key, opt.value);
            console.log(rules);
            Rule.init($this, rules);
            Rule.addListener($this);
        }
        else {
            Rule.init($this);
        }
    }

    $.fn.rules = rules;
})(jQuery);
