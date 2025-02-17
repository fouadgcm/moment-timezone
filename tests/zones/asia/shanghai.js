"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Shanghai"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Shanghai", { offset: true, expect: "Asia/Manila" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Shanghai", { abbr: true }),

	"1900" : helpers.makeTestYear("Asia/Shanghai", [
		["1900-12-31T15:54:16+00:00", "23:59:59", "LMT", -29143 / 60],
		["1900-12-31T15:54:17+00:00", "23:54:17", "CST", -480]
	]),

	"1919" : helpers.makeTestYear("Asia/Shanghai", [
		["1919-04-12T15:59:59+00:00", "23:59:59", "CST", -480],
		["1919-04-12T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1919-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1919-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1940" : helpers.makeTestYear("Asia/Shanghai", [
		["1940-05-31T15:59:59+00:00", "23:59:59", "CST", -480],
		["1940-05-31T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1940-10-12T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1940-10-12T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1941" : helpers.makeTestYear("Asia/Shanghai", [
		["1941-03-14T15:59:59+00:00", "23:59:59", "CST", -480],
		["1941-03-14T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1941-11-01T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1941-11-01T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1942" : helpers.makeTestYear("Asia/Shanghai", [
		["1942-01-30T15:59:59+00:00", "23:59:59", "CST", -480],
		["1942-01-30T16:00:00+00:00", "01:00:00", "CDT", -540]
	]),

	"1945" : helpers.makeTestYear("Asia/Shanghai", [
		["1945-09-01T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1945-09-01T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1946" : helpers.makeTestYear("Asia/Shanghai", [
		["1946-05-14T15:59:59+00:00", "23:59:59", "CST", -480],
		["1946-05-14T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1946-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1946-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1947" : helpers.makeTestYear("Asia/Shanghai", [
		["1947-04-14T15:59:59+00:00", "23:59:59", "CST", -480],
		["1947-04-14T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1947-10-31T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1947-10-31T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1948" : helpers.makeTestYear("Asia/Shanghai", [
		["1948-04-30T15:59:59+00:00", "23:59:59", "CST", -480],
		["1948-04-30T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1948-09-30T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1948-09-30T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1949" : helpers.makeTestYear("Asia/Shanghai", [
		["1949-04-30T15:59:59+00:00", "23:59:59", "CST", -480],
		["1949-04-30T16:00:00+00:00", "01:00:00", "CDT", -540],
		["1949-05-27T14:59:59+00:00", "23:59:59", "CDT", -540],
		["1949-05-27T15:00:00+00:00", "23:00:00", "CST", -480]
	]),

	"1986" : helpers.makeTestYear("Asia/Shanghai", [
		["1986-05-03T17:59:59+00:00", "01:59:59", "CST", -480],
		["1986-05-03T18:00:00+00:00", "03:00:00", "CDT", -540],
		["1986-09-13T16:59:59+00:00", "01:59:59", "CDT", -540],
		["1986-09-13T17:00:00+00:00", "01:00:00", "CST", -480]
	]),

	"1987" : helpers.makeTestYear("Asia/Shanghai", [
		["1987-04-11T17:59:59+00:00", "01:59:59", "CST", -480],
		["1987-04-11T18:00:00+00:00", "03:00:00", "CDT", -540],
		["1987-09-12T16:59:59+00:00", "01:59:59", "CDT", -540],
		["1987-09-12T17:00:00+00:00", "01:00:00", "CST", -480]
	]),

	"1988" : helpers.makeTestYear("Asia/Shanghai", [
		["1988-04-16T17:59:59+00:00", "01:59:59", "CST", -480],
		["1988-04-16T18:00:00+00:00", "03:00:00", "CDT", -540],
		["1988-09-10T16:59:59+00:00", "01:59:59", "CDT", -540],
		["1988-09-10T17:00:00+00:00", "01:00:00", "CST", -480]
	]),

	"1989" : helpers.makeTestYear("Asia/Shanghai", [
		["1989-04-15T17:59:59+00:00", "01:59:59", "CST", -480],
		["1989-04-15T18:00:00+00:00", "03:00:00", "CDT", -540],
		["1989-09-16T16:59:59+00:00", "01:59:59", "CDT", -540],
		["1989-09-16T17:00:00+00:00", "01:00:00", "CST", -480]
	]),

	"1990" : helpers.makeTestYear("Asia/Shanghai", [
		["1990-04-14T17:59:59+00:00", "01:59:59", "CST", -480],
		["1990-04-14T18:00:00+00:00", "03:00:00", "CDT", -540],
		["1990-09-15T16:59:59+00:00", "01:59:59", "CDT", -540],
		["1990-09-15T17:00:00+00:00", "01:00:00", "CST", -480]
	]),

	"1991" : helpers.makeTestYear("Asia/Shanghai", [
		["1991-04-13T17:59:59+00:00", "01:59:59", "CST", -480],
		["1991-04-13T18:00:00+00:00", "03:00:00", "CDT", -540],
		["1991-09-14T16:59:59+00:00", "01:59:59", "CDT", -540],
		["1991-09-14T17:00:00+00:00", "01:00:00", "CST", -480]
	])
};