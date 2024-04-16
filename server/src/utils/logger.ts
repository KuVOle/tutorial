//-------------------------------------------------------------------------------------------------------------------------
// if you need setup default level logging, you can use 'process.env.PINO_LOG_LEVEL'. 'info' - from dev, 'warn' - from prod
// #redact - array from hidden field in object
// if you need desktop log we can use @logtail/pino, but
//-------------------------------------------------------------------------------------------------------------------------
import { pino } from "pino";
import __dirname from "./dirname.js";

class logger {
	#level = process.env.PINO_LOG_LEVEL || "info";
	#pino = pino;
	#timestamp = this.#pino.stdTimeFunctions.isoTime;
	#bindings(bindings) {
		return {
			pid: bindings.pid,
			host: bindings.hostname,
			node_version: process.version,
		};
	}
	#destination = `${__dirname}/../../logs/app.log`;
	#filetransport = this.#pino.transport({
		targets: [
			{
				target: "pino/file",
				options: { destination: this.#destination },
			},
			{
				target: "pino-pretty",
			},
			// {
			// 	target: "@logtail/pino",
			// 	options: { sourceToken: "<your_logtail_source_token>" },
			// },
		],
	});
	#redact = [
		"user.name",
		"*.user.name",
		"user.address",
		"*.user.address",
		"user.passport",
		"*.user.passport",
		"user.phone",
		"*.user.phone",
	];
	#pinoSettings = {
		level: this.#level,
		timestamp: this.#timestamp,
		formatters: {
			bindings: this.#bindings,
		},
		redact: {
			paths: this.#redact,
			censor: "secret-log",
		},
	};
	pino() {
		return this.#pino(this.#pinoSettings, this.#filetransport);
	}
}
export default new logger().pino();
