class Init {
    constructor(functions) {
        this.core = {};
        this.functions = functions;
        this.events = ["scroll", "resize"];

        this.init();
    }

    static presentError(operation, error) {
        if (typeof console === "undefined") {
            return;
        }
        if (console.groupCollapsed) {
            console.groupCollapsed(
                `%c [${operation} error] - ${
                    error.message
                }. Expand for details:`,
                "color: #ff5a5a"
            );
            console.log(error.stack);
            console.groupEnd();
        } else {
            console.log(error.stack);
        }
    }

    init() {
        Object.keys(this.functions).forEach(k => {
            this.bindEvents(k, this.functions[k]);
        });
    }

    setInstance(Module) {
        if (typeof Module === "function") {
            return new Module();
        }

        return Module;
    }

    deBounce(instance, event) {
        window.addEventListener(event, () => {
            window.requestAnimationFrame
                ? window.requestAnimationFrame(() => instance[event]())
                : instance[event]();
        });
    }

    bindEvent(event, module) {
        return typeof module[event] !== "undefined"
            ? this.deBounce(module, event)
            : null;
    }

    bindEvents(name, method) {
        try {
            const module = this.setInstance(method);

            this.events.forEach(event => this.bindEvent(event, module));

            this.core[name] = module;
        } catch (error) {
            Init.presentError(name, error);
        }
    }
}

export default Init;