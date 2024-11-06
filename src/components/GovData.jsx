const govData={"UK":[11.33,	11.06,	10.47,	10.56,	9.38,	8.72,	8.29,	7.57,	7.63,	7.35,	7.26,	7.13,	6.96,	6.92,	6.92,	6.87,	6.56,	6.31,	6.18,	6.16,	6.09,	5.95,	5.76,	5.74,	5.54,	5.46,	5.30,	5.07,	5.00,	4.99,	5.01,	5.14,	4.33,	4.51,	4.71,	5.15,

],
"France":[5.88,	5.85,	5.62,	5.51,	5.14,	4.90,	4.90,	4.57,	4.42,	4.38,	4.23,	4.16,	4.04,	3.93,	3.88,	3.93,	3.97,	3.80,	3.74,	3.63,	3.56,	3.67,	3.46,	3.36,	3.28,	3.23,	3.26,	3.30,	3.38,	3.38,	3.31,	3.32,	3.25,	3.24,	3.31,	3.57,

],
"Italy":[4.02,	3.83,	3.29,	3.18,	3.00,	3.01,	3.03,	2.83,	3.08,	3.28,	3.41,	3.56,	3.73,	3.53,	3.64,	3.61,	3.58,	3.39,	3.18,	3.09,	3.21,	3.04,	3.01,	3.00,	2.82,	2.75,	2.52,	2.40,	2.72,	2.78,	2.81,	2.71,	3.05,	2.99,	3.04,	3.04,

],
"Luxembourg":[0,	0,	0,	0,	0,	0,	0,	1.49,	1.47,	1.49,	1.53,	1.45,	1.44,	1.78,	1.41,	1.40,	1.39,	1.35,	1.32,	1.34,	0.96,	0.87,	1.05,	0.91,	0.86,	0.87,	0.90,	1.03,	0.95,	1.20,	1.18,	1.27,	1.23,	1.10,	1.43,	1.62,

],
"Armenia":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	14.45,	14.74,	13.57,	15.27,	14.56,	16.28,	15.44,	15.99,	16.80,	16.44,	16.10,	15.12,	14.79,	17.13,	19.23,	16.26,	15.58,	15.47,	19.96,

],
"Azerbaijan":[0,	0,	0,	0,	0,	0,	8.02,	14.67,	11.41,	11.50,	13.39,	13.46,	12.43,	13.78,	9.69,	11.20,	10.86,	10.22,	13.51,	10.99,	10.47,	9.64,	8.73,	13.84,	12.72,	12.02,	12.52,	14.12,	10.41,	10.56,	10.70,	11.84,	13.06,	15.27,	14.50,	14.71,

],
"Belarus":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	32.80,	30.94,	28.86,	29.85,	32.21,	35.02,	32.45,	23.43,	25.68,	30.27,	30.39,	31.61,	31.14,	26.84,	27.25,	37.44,	35.14,	40.64,	37.38,	36.88,	37.63,	45.65,	50.59,

],
"Georgia":[0,	0,	0,	0,	0,	0,	0,	0,	11.70,	5.57,	5.85,	4.55,	3.54,	4.28,	6.09,	6.46,	7.09,	15.03,	22.40,	32.22,	26.08,	15.66,	11.80,	11.17,	10.50,	9.48,	8.41,	7.29,	7.34,	7.14,	6.98,	6.14,	5.24,	5.11,	4.97,	5.54,

],
"Moldova":[0,	0,	0,	0,	0,	0,	0,	2.20,	2.09,	1.96,	1.60,	1.55,	1.14,	1.36,	1.37,	1.24,	1.04,	1.08,	1.20,	1.21,	1.47,	1.01,	0.77,	0.84,	0.81,	0.87,	0.87,	0.93,	1.13,	1.05,	1.05,	1.13,	1.05,	1.09,	0.90,	1.40,

],
"Russia":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	6.91,	8.99,	10.82,	11.30,	11.14,	11.29,	11.17,	11.34,	11.21,	9.79,	9.86,	10.19,	10.12,	10.32,	10.84,	11.12,	11.77,	13.81,	14.83,	12.20,	11.40,	11.40,	10.59,	10.31,	12.94,	16.14,

],
"Ukraine":[0,	0,	0,	0,	0,	0,	0,	6.62,	8.62,	9.77,	8.75,	11.16,	9.91,	7.84,	7.33,	7.33,	6.25,	6.33,	6.22,	6.55,	5.64,	6.06,	5.58,	4.94,	4.81,	4.97,	6.63,	8.94,	8.99,	7.78,	8.67,	9.80,	9.58,	8.46,	39.21,	58.17,

],
"Austria":[2.70,	2.64,	2.55,	2.41,	2.24,	2.06,	2.03,	1.90,	1.86,	1.95,	1.83,	1.94,	1.93,	1.77,	1.68,	1.82,	1.66,	1.66,	1.56,	1.83,	1.75,	1.54,	1.55,	1.55,	1.52,	1.45,	1.43,	1.37,	1.46,	1.54,	1.53,	1.54,	1.56,	1.56,	1.46,	1.63,

],
"Belgium":[4.64,	4.47,	4.28,	4.06,	3.24,	3.01,	3.03,	2.93,	2.86,	2.83,	2.78,	2.76,	2.73,	2.60,	2.45,	2.39,	2.35,	2.11,	2.16,	2.26,	2.41,	2.14,	2.02,	1.90,	1.84,	1.80,	1.75,	1.69,	1.68,	1.70,	1.71,	1.71,	1.72,	1.89,	2.23,	2.22,

],
"Cyprus":[0,	0,	0,	0,	0,	0,	0,	9.89,	13.79,	16.37,	13.74,	8.05,	8.07,	8.83,	5.69,	4.92,	5.06,	5.13,	4.86,	4.48,	4.26,	4.34,	4.44,	4.13,	3.95,	3.82,	3.83,	4.18,	3.77,	4.31,	4.13,	4.69,	4.34,	4.39,	4.71,	4.62,

],
"Denmark":[3.64,	3.52,	3.49,	3.47,	3.29,	3.16,	2.94,	2.88,	2.84,	2.89,	2.90,	2.87,	2.77,	2.90,	2.83,	2.73,	2.69,	2.56,	2.76,	2.64,	2.69,	2.39,	2.47,	2.33,	2.33,	2.20,	2.08,	2.04,	2.19,	2.25,	2.53,	2.61,	2.58,	2.61,	3.04,	4.10,

],
"Finland":[3.15,	3.17,	3.22,	3.09,	3.03,	2.85,	2.74,	2.37,	2.62,	2.79,	2.85,	2.45,	2.64,	2.47,	2.43,	2.99,	3.05,	2.98,	2.99,	2.76,	2.91,	2.89,	2.77,	2.78,	2.75,	2.70,	2.54,	2.57,	2.55,	2.52,	2.55,	2.54,	2.49,	2.32,	2.97,	4.44,

],
"Germany":[0,	0,	0,	4.28,	3.92,	3.51,	3.21,	2.72,	2.97,	2.91,	2.89,	2.90,	2.86,	2.80,	2.79,	2.74,	2.72,	2.28,	2.65,	2.70,	2.74,	2.72,	2.63,	2.67,	2.76,	2.64,	2.60,	2.58,	2.60,	2.61,	2.64,	2.80,	2.72,	2.59,	2.78,	3.08,

],
"Greece":[10.81,	9.43,	8.59,	8.62,	8.57,	8.12,	8.45,	6.64,	7.02,	7.31,	7.40,	7.28,	7.46,	7.07,	6.72,	5.35,	5.47,	6.23,	6.17,	5.69,	5.87,	5.96,	5.19,	4.58,	4.55,	4.55,	4.64,	4.81,	5.15,	5.29,	5.60,	5.46,	5.10,	6.70,	7.61,	6.57,

],
"Ireland":[	2.49,	2.61,	2.77,	2.79,	2.63,	2.62,	2.57,	2.52,	2.57,	2.56,	2.41,	2.31,	2.27,	2.18,	1.93,	1.80,	1.73,	1.64,	1.53,	1.43,	1.39,	1.28,	0.89,	1.15,	1.21,	1.24,	1.23,	1.18,	1.19,	1.17,	1.13,	1.15,	0.98,	1.01,	1.03,	1.02,

],
"Netherlands":[4.93,	4.92,	4.73,	4.42,	4.30,	3.89,	3.78,	3.33,	3.74,	3.65,	3.56,	3.61,	3.38,	3.34,	3.27,	3.23,	3.27,	3.28,	3.21,	3.17,	3.00,	2.92,	2.75,	2.73,	2.63,	2.49,	2.52,	2.53,	2.67,	2.72,	2.88,	3.13,	3.01,	3.03,	3.11,	3.39,

],
"Norway":[5.87,	5.95,	5.79,	5.40,	5.67,	5.24,	5.42,	4.68,	4.60,	4.43,	4.51,	4.39,	4.12,	3.94,	4.50,	4.13,	4.12,	3.77,	3.57,	3.56,	3.45,	3.50,	3.39,	3.33,	3.29,	3.23,	3.23,	3.11,	3.21,	3.46,	3.60,	3.67,	3.47,	3.62,	3.90,	4.00,

],
"Portugal":[4.36,	4.44,	4.24,	3.88,	3.68,	3.76,	3.86,	4.01,	3.72,	3.64,	3.34,	3.35,	3.28,	3.28,	3.32,	3.16,	3.27,	3.41,	3.35,	3.09,	3.12,	3.05,	2.87,	2.98,	2.88,	2.89,	2.53,	2.76,	3.44,	2.73,	3.10,	3.24,	2.90,	3.20,	3.17,	3.44,

],
"Spain":[6.15,	5.62,	5.33,	4.77,	4.44,	4.12,	4.24,	4.22,	4.10,	4.03,	4.08,	4.39,	4.40,	4.24,	3.77,	3.71,	3.68,	3.60,	3.56,	3.47,	3.30,	2.94,	3.01,	2.89,	2.88,	2.74,	2.77,	2.88,	2.68,	2.98,	3.00,	2.92,	2.63,	2.71,	3.04,	3.21,

],
"Sweden":[4.00,	3.99,	3.97,	3.54,	3.27,	3.29,	3.23,	2.81,	2.46,	3.28,	3.35,	3.36,	3.47,	3.42,	3.10,	3.00,	2.78,	2.74,	2.63,	2.69,	2.37,	2.26,	2.40,	2.26,	2.26,	2.20,	2.27,	2.20,	2.16,	2.12,	2.12,	2.27,	2.25,	2.46,	2.76,	3.06,

],
"Switzerland":[5.38,	5.34,	5.52,	5.07,	4.73,	4.09,	3.98,	4.06,	3.78,	3.60,	3.53,	3.18,	3.11,	3.05,	2.73,	2.72,	2.63,	2.57,	2.47,	2.44,	2.41,	2.31,	2.19,	2.21,	2.11,	2.19,	1.97,	2.01,	2.05,	2.05,	2.06,	2.18,	2.09,	1.96,	2.19,	2.20,

],
"Bulgaria":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	6.96,	7.24,	7.14,	7.85,	7.93,	7.52,	6.86,	6.57,	6.41,	6.73,	6.37,	5.15,	4.75,	4.11,	4.09,	4.10,	3.53,	3.34,	3.80,	3.82,	4.22,	8.74,	4.21,	3.93,	4.22,	5.02,

],
"Croatia":[0,	0,	0,	0,	17.19,	25.02,	20.61,	18.27,	15.69,	14.58,	9.86,	7.50,	5.54,	5.40,	5.41,	4.15,	3.56,	3.83,	3.72,	3.52,	4.02,	3.56,	3.44,	3.60,	3.52,	3.37,	3.72,	3.71,	3.48,	3.71,	3.42,	3.63,	3.15,	4.06,	4.04,	3.90,

],
"Czechia":[0,	0,	0,	0,	0,	0,	0,	3.33,	4.00,	3.82,	4.17,	4.49,	4.58,	4.03,	4.07,	3.84,	4.03,	4.20,	3.78,	3.52,	3.02,	2.95,	2.74,	2.50,	2.38,	2.38,	2.27,	2.26,	2.51,	2.45,	2.68,	2.81,	2.80,	3.00,	3.09,	3.30,

],
"Serbia":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	16.43,	11.91,	9.81,	8.23,	7.28,	5.71,	5.12,	5.33,	4.69,	5.04,	4.87,	4.81,	4.37,	4.49,	4.33,	4.28,	4.17,	4.76,	4.02,	6.01,	4.93,	4.97,	6.24,	6.42,

],
"Slovakia":[0,	0,	0,	0,	0,	0,	0,	6.50,	5.56,	4.68,	3.80,	3.28,	3.13,	4.06,	3.90,	4.55,	4.35,	4.23,	4.11,	4.06,	3.94,	3.41,	2.96,	2.58,	2.62,	2.30,	2.28,	2.44,	2.62,	2.80,	3.08,	4.21,	4.29,	3.82,	4.28,	4.19,

],
"Slovenia":[0,	0,	0,	0,	0,	0,	0,	2.95,	3.40,	3.09,	2.94,	2.57,	2.31,	2.67,	2.95,	2.98,	3.07,	3.06,	3.39,	3.32,	3.31,	3.21,	3.19,	2.54,	2.36,	1.74,	1.92,	1.91,	2.18,	2.23,	2.25,	2.43,	2.06,	2.49,	2.75,	2.83,

],
"Lathvia":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1.59,	1.91,	2.43,	3.03,	4.50,	4.89,	4.77,	4.67,	5.06,	4.71,	4.46,	3.25,	2.54,	2.69,	2.45,	2.52,	2.50,	2.77,	4.01,	4.37,	5.42,	5.36,	5.22,	4.83,	5.18,	5.63,

],
"Lithuania":[0,	0,	0,	0,	0,	2.20,	1.35,	1.37,	1.57,	2.29,	3.34,	2.46,	3.39,	3.89,	3.83,	3.50,	3.60,	3.48,	3.45,	3.23,	3.05,	2.48,	2.13,	1.91,	2.18,	2.20,	2.59,	3.31,	4.44,	5.28,	5.93,	5.91,	4.93,	5.28,	6.78,	6.93,

],
"Poland":[0,	0,	0,	0,	0,	0,	0,	4.10,	3.86,	4.38,	4.56,	4.50,	4.24,	4.24,	4.20,	4.18,	4.31,	4.35,	4.32,	4.67,	3.97,	3.99,	4.00,	4.06,	4.18,	4.14,	4.47,	5.13,	4.72,	4.59,	4.93,	4.72,	4.74,	5.09,	5.10,	8.12,

],
"Romania":[0,	0,	11.82,	12.38,	10.12,	8.11,	9.32,	7.98,	7.33,	9.00,	8.49,	7.57,	7.17,	7.36,	7.15,	6.80,	6.06,	6.21,	5.45,	4.32,	3.97,	3.52,	3.28,	3.53,	3.51,	3.78,	3.99,	4.25,	4.49,	5.59,	5.65,	5.51,	5.26,	4.99,	4.68,	4.37,

],
"Hungary":[0,	0,	0,	0,	0,	0,	0,	2.39,	2.46,	2.97,	2.50,	2.92,	3.20,	3.33,	3.13,	3.35,	3.02,	2.86,	2.37,	2.54,	2.42,	2.23,	2.09,	2.11,	2.09,	1.88,	1.71,	1.80,	2.14,	2.55,	2.18,	2.90,	3.45,	2.74,	3.81,	4.41,

],
"Australia":[7.04,	6.92,	6.79,	6.55,	6.36,	6.38,	6.26,	6.00,	5.76,	5.69,	5.39,	5.21,	5.18,	5.23,	5.35,	5.28,	5.24,	5.20,	5.26,	5.28,	5.13,	5.09,	5.02,	4.84,	4.57,	4.51,	4.82,	5.24,	5.61,	5.45,	5.14,	4.83,	4.52,	4.73,	5.01,	5.06,
],
"Fiji":[0,	0,	0,	0,	7.13,	7.03,	7.01,	7.02,	5.40,	4.69,	4.70,	4.89,	7.07,	6.91,	5.65,	5.76,	6.61,	5.67,	6.48,	8.79,	6.21,	6.30,	5.97,	5.88,	5.40,	5.11,	5.29,	3.06,	3.51,	5.14,	4.58,	4.77,	4.65,	4.50,	4.36,	4.77,
],
"New Zealand":[4.59,	4.55,	4.67,	4.30,	3.99,	4.14,	4.33,	4.43,	4.49,	4.37,	4.26,	4.20,	4.17,	4.03,	3.81,	3.62,	3.25,	3.07,	3.28,	3.19,	2.99,	3.02,	2.81,	2.74,	2.81,	2.70,	2.65,	2.65,	2.84,	2.95,	3.06,	3.33,	3.18,	2.77,	2.75,	2.91,
],
"Papua New Guinea":[4.48,	4.54,	5.88,	4.20,	3.97,	3.96,	5.34,	4.62,	5.89,	5.32,	4.47,	3.28,	3.18,	2.58,	1.86,	1.88,	2.00,	2.01,	1.93,	2.28,	1.71,	1.82,	1.77,	1.81,	2.32,	1.79,	1.79,	2.01,	1.83,	1.93,	1.63,	1.75,	1.67,	1.50,	1.41,	1.42,
],
"Afghanistan":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	16.13,	12.69,	10.36,	11.95,	11.17,	9.86,	9.35,	8.30,	4.70,	4.31,	5.11,	3.83,	3.68,	3.65,	3.72,	4.28,	4.97,	10.50,	0,	0,
],
"Bangladesh":[10.33,	10.45,	10.28,	10.43,	11.58,	11.16,	11.83,	11.44,	11.99,	12.27,	12.33,	14.16,	12.31,	10.51,	10.12,	9.88,	10.11,	9.48,	9.77,	10.36,	8.13,	9.73,	11.17,	10.56,	10.10,	9.21,	9.67,	10.51,	10.57,	9.22,	8.91,	9.18,	9.35,	9.01,	8.08,	8.04,
],
"India":[14.78,	13.57,	12.40,	10.86,	10.31,	10.97,	10.35,	10.50,	10.33,	10.68,	10.66,	11.64,	11.50,	10.52,	9.88,	9.10,	10.12,	10.42,	9.48,	8.85,	8.89,	10.31,	9.86,	9.59,	9.27,	9.30,	9.50,	8.83,	9.08,	9.39,	9.10,	9.32,	8.76,	8.15,	8.05,	8.15,
],
"Nepal":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	6.87,	7.46,	9.77,	11.67,	13.32,	14.04,	13.73,	10.35,	10.48,	8.50,	8.33,	8.26,	7.42,	8.65,	8.65,	7.74,	7.75,	6.28,	4.82,	4.52,	4.79,	4.46,	4.05,	4.08,
],
"Pakistan":[0,	0,	0,	0,	0,	25.10,	27.40,	27.21,	24.58,	25.04,	23.45,	23.98,	22.42,	24.03,	22.57,	25.41,	26.06,	24.45,	21.37,	18.03,	16.13,	16.94,	16.83,	16.98,	16.09,	15.93,	17.34,	18.01,	18.09,	17.59,	18.77,	18.40,	17.18,	18.36,	15.93,	14.45,
],
"Sri Lanka":[0,	0,	7.51,	9.53,	11.95,	12.10,	12.65,	19.34,	19.53,	17.68,	17.76,	16.06,	18.93,	15.64,	13.58,	12.54,	13.15,	11.08,	11.53,	13.87,	16.44,	14.56,	13.53,	13.53,	12.09,	12.52,	13.51,	12.54,	10.87,	11.05,	9.89,	9.01,	8.39,	8.60,	7.25,	7.02,
],
"Kazakhstan":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	4.86,	4.82,	4.65,	4.71,	4.94,	5.47,	4.27,	4.70,	4.51,	4.41,	4.78,	5.44,	4.90,	4.85,	4.34,	3.45,	4.43,	5.04,	3.70,	3.71,	2.38,	2.10,
],

"Kyrgyz Republic":[0,	0,	0,	0,	0,	0,	0,	4.73,	5.41,	5.66,	4.43,	5.16,	6.23,	5.18,	5.50,	6.04,	5.92,	5.55,	5.72,	4.52,	4.26,	4.40,	4.34,	3.73,	4.01,	4.25,	4.45,	4.60,	4.36,	4.26,	4.65,	4.46,	4.92,	8.85,	8.30,	10.49,
    ],
"Tajikistan":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	10.21,	7.93,	6.21,	6.40,	11.01,	11.73,	10.72,	0,	0,	0,	5.03,	4.02,	3.65,	4.55,	4.07,	0,	4.10,	4.02,	3.12,	3.07,	3.40,	3.46,	3.25,	3.63,	6.91,	3.78,
    ],
"Turkmenistan":[0,	0,	0,	0,	0,	0,	0,	0,	0,	15.83,	12.82,	14.96,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,
    ],
"Uzbekistan":[0,	0,	0,	0,	0,	0,	4.50,	3.01,	2.81,	3.51,	0,	3.88,	2.80,	2.17,	1.38,	1.36,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	10.98,	0,	0,	0,	0,	0,
    ],
 "China":[0,	13.21,	13.75,	14.25,	16.87,	14.80,	14.09,	15.16,	14.95,	14.09,	13.06,	12.52,	11.34,	11.42,	11.19,	10.97,	10.88,	10.23,	10.19,	9.63,	7.65,	7.40,	6.97,	6.17,	6.04,	5.97,	5.99,	5.60,	5.48,	5.26,	5.05,	4.91,	4.90,	4.93,	4.88,	4.97,
    ],
"Japan":[3.02,	3.08,	3.07,	3.07,	2.99,	2.84,	2.76,	2.70,	2.65,	2.73,	2.39,	2.62,	2.55,	2.65,	2.66,	2.68,	2.75,	2.74,	2.73,	2.67,	2.66,	2.52,	2.51,	2.52,	2.48,	2.43,	2.49,	2.54,	2.50,	2.49,	2.62,	2.66,	2.28,	2.38,	2.51,	2.82,
    ],
"South Korea":[0,	0,	0,	0,	0,	0,	0,	20.31,	18.51,	18.16,	16.42,	14.53,	14.42,	13.46,	13.66,	12.17,	11.71,	12.56,	12.28,	12.07,	12.50,	12.79,	13.22,	12.97,	12.71,	12.57,	12.80,	12.64,	12.62,	12.33,	12.25,	11.85,	11.17,	10.87,	9.66,	11.10,
    ],
 "Mongolia":[13.96,	12.59,	9.15,	8.54,	7.24,	4.76,	5.50,	5.51,	5.61,	5.13,	4.90,	5.13,	6.18,	5.18,	5.10,	4.53,	4.38,	4.70,	4.38,	3.78,	3.15,	2.32,	2.42,	2.21,	2.56,	2.56,	2.67,	2.81,	2.18,	2.37,	2.36,	2.15,	1.93,	1.77,	1.55,	1.73,
    ],
 "Taiwan":[22.53,	16.20,	18.41,	16.48,	16.08,	17.17,	16.45,	14.76,	14.84,	13.78,	12.14,	12.63,	8.24,	10.96,	11.10,	10.62,	10.63,	10.23,	10.15,	10.54,	10.90,	10.35,	10.16,	10.22,	10.52,	10.02,	10.09,	10.55,	10.13,	10.23,	9.93,	10.40,	9.80,	10.32,	11.14,	13.64,
    ],    

  "Canada":[4.34,	4.19,	3.98,	3.60,	3.46,	3.44,	3.37,	3.17,	2.98,	2.79,	2.82,	2.90,	2.75,	2.76,	2.76,	2.76,	2.82,	2.87,	2.90,	3.08,	3.21,	3.17,	2.77,	2.87,	2.73,	2.51,	2.58,	2.88,	2.86,	3.34,	3.24,	3.16,	2.66,	2.76,	2.89,	3.12,
  ],
  "USA":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	9.56,	10.28,	11.30,	11.97,	12.06,	12.00,	11.79,	11.97,	11.78,	12.34,	12.43,	11.99,	11.25,	10.42,	9.89,	9.63,	9.37,	9.35,	9.55,	8.25,	8.04,	9.32,	9.06,
  ],  
"Argentina":[0,	0,	0,	0,	0,	5.78,	5.68,	5.76,	4.89,	4.51,	4.39,	4.29,	4.07,	4.01,	4.47,	4.31,	3.84,	3.47,	2.96,	2.68,	2.48,	2.57,	2.44,	2.19,	2.13,	2.23,	2.26,	2.06,	1.95,	2.06,	1.88,	1.84,	1.73,	1.67,	1.84,	1.25,
],
"Bolivia":[8.43,	8.84,	12.36,	11.12,	9.92,	7.05,	8.41,	8.13,	7.63,	8.04,	8.98,	7.26,	7.04,	7.26,	5.98,	6.71,	5.86,	5.17,	4.91,	4.56,	6.21,	4.92,	8.84,	4.76,	5.12,	4.79,	4.39,	3.95,	3.83,	3.98,	4.04,	4.02,	3.67,	3.85,	2.74,	4.20,
],
"Brazil":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	4.72,	4.11,	3.52,	3.56,	3.51,	3.47,	3.53,	3.46,	3.69,	3.65,	3.36,	3.29,	3.12,	3.01,	2.78,	2.77,	2.93,	3.09,	2.95,	2.66,	2.68,	2.31,	2.24,
],
"Chile":[0,	0,	14.85,	12.82,	12.06,	12.26,	12.38,	12.71,	11.74,	12.02,	11.76,	11.41,	11.76,	11.42,	10.91,	12.17,	13.03,	12.52,	13.38,	12.07,	11.86,	9.11,	9.61,	9.89,	8.86,	8.63,	8.25,	7.63,	7.59,	7.61,	7.33,	7.04,	7.10,	4.90,	5.78,	6.06,
],
"Colombia":[10.86,	8.88,	9.10,	8.98,	9.75,	10.80,	10.20,	10.68,	14.84,	8.96,	10.93,	11.14,	11.48,	12.16,	12.25,	12.45,	13.10,	13.04,	11.59,	11.67,	13.15,	12.57,	11.98,	10.18,	10.85,	10.91,	9.94,	9.94,	10.24,	10.94,	8.75,	9.57,	10.54,	9.31,	8.26,	8.31,
],
"Ecuador":[0,	0,	0,	0,	0,	0,	0,	9.84,	8.01,	8.79,	9.70,	6.49,	6.25,	7.76,	8.20,	11.22,	9.48,	10.74,	9.57,	10.65,	7.56,	9.46,	8.68,	7.84,	6.83,	6.06,	5.90,	6.06,	5.83,	5.82,	5.79,	5.48,	6.11,	6.00,	5.71,	6.06,
],
"Guyana":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	3.68,	3.98,	4.63,	4.37,	5.65,	3.81,	3.48,	4.41,	5.08,	4.72,	4.50,	4.14,	3.75,	3.92,	4.12,	4.99,	4.59,	4.77,	4.67,	4.62,	4.59,	3.85,	2.96,	2.33,
],
"Paraguay":[34.76,	21.75,	23.04,	25.14,	18.42,	17.08,	14.02,	14.27,	11.95,	9.16,	8.14,	6.73,	6.26,	5.57,	5.40,	5.10,	5.57,	4.87,	5.21,	5.26,	5.33,	4.96,	5.08,	5.33,	5.16,	5.46,	5.49,	5.22,	4.89,	4.58,	4.67,	4.24,	3.97,	3.70,	3.71,	3.79,
],
"Peru":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	8.33,	8.46,	7.92,	7.57,	7.13,	7.95,	7.70,	7.01,	6.25,	7.11,	6.98,	6.98,	7.29,	7.59,	7.03,	7.73,	6.20,	5.87,	5.49,	5.60,	4.80,	4.95,	4.88,	4.92,
],
"Uruguay":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	8.06,	8.41,	8.25,	8.40,	7.40,	7.03,	6.98,	6.85,	6.09,	6.52,	6.14,	6.28,	5.99,	5.97,	5.78,	5.69,	5.89,	5.79,	6.03,	6.42,	6.09,	6.21,	6.80,	6.13,	6.72,
],
"Venezuela":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,
],
"Bahrain":[0,	0,	14.29,	16.98,	16.75,	16.77,	16.29,	17.09,	19.30,	13.61,	17.59,	17.02,	17.15,	14.64,	14.52,	15.91,	15.53,	12.90,	12.87,	12.66,	11.84,	14.08,	10.12,	11.45,	11.89,	12.47,	15.55,	12.72,	13.35,	13.43,	12.04,	12.33,	11.33,	11.04,	10.66,	10.75,
],
"Egypt":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	9.79,	9.82,	10.72,	10.60,	10.37,	9.55,	8.95,	7.55,	7.61,	6.67,	6.25,	6.23,	6.01,	5.34,	4.65,	4.74,	5.23,	5.09,	4.42,	4.15,	4.18,	4.51,	4.76,	4.60,	4.15,
],
"Iran":[0,	0,	14.48,	12.49,	9.90,	5.14,	7.60,	8.50,	10.65,	11.87,	12.94,	12.57,	14.04,	14.57,	11.10,	12.13,	14.90,	13.61,	14.32,	15.25,	12.98,	15.69,	15.97,	13.01,	19.32,	15.61,	14.80,	15.55,	15.41,	16.05,	13.92,	14.34,	14.39,	16.33,	15.49,	13.53,
],
"Iraq":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1.83,	3.55,	3.77,	4.86,	4.14,	4.92,	5.47,	5.31,	4.43,	6.87,	6.74,	12.45,	8.38,	11.01,	8.84,	9.34,	7.43,	6.23,	4.66,	4.15,
],
"Israel":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	14.07,	13.69,	12.76,	13.81,	14.31,	14.31,	14.11,	15.39,	15.17,	14.48,	14.61,	14.35,	13.97,	13.73,	14.74,	14.48,	14.36,	14.18,	13.52,	13.13,	11.79,	12.36,	12.18,	14.59,
],
"Jordan":[21.03,	21.19,	17.51,	22.08,	19.19,	18.87,	18.70,	12.33,	16.33,	17.74,	17.45,	18.63,	18.32,	17.79,	15.92,	16.07,	13.63,	12.33,	12.81,	16.05,	17.65,	18.51,	17.93,	15.15,	12.64,	12.48,	11.81,	12.80,	15.61,	16.24,	15.01,	15.20,	15.06,	14.56,	14.48,	14.49,
],
"Kuwait":[16.81,	20.17,	52.56,	57.48,	35.00,	20.27,	22.66,	24.88,	23.12,	18.52,	16.91,	16.90,	19.56,	17.93,	17.67,	17.67,	16.97,	15.44,	11.10,	11.94,	7.44,	9.41,	8.40,	8.96,	8.80,	8.58,	8.10,	9.20,	10.91,	10.78,	10.02,	10.22,	9.87,	11.98,	11.23,	9.45,
],
"Lebanon":[0,	0,	19.14,	14.68,	22.40,	26.45,	14.99,	21.87,	13.17,	10.77,	11.73,	13.58,	12.75,	14.18,	13.10,	13.01,	13.55,	14.25,	12.68,	13.19,	11.70,	12.56,	14.15,	14.13,	13.21,	14.28,	16.37,	16.82,	18.02,	15.06,	15.64,	15.20,	15.48,	15.24,	10.72,	0,
],
"Oman":[0,	0,	29.61,	25.77,	26.48,	25.10,	25.83,	25.01,	24.51,	25.44,	22.74,	22.00,	22.70,	24.63,	23.73,	23.45,	23.07,	25.19,	23.62,	21.86,	19.39,	18.20,	18.47,	18.71,	27.40,	24.81,	21.39,	21.49,	23.68,	21.34,	21.57,	19.18,	18.03,	18.15,	16.98,	20.66,
],
"Qatar":[0,	0,	25.25,	27.90,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	12.46,	11.61,	8.42,	6.86,	6.15,	6.98,	8.74,	6.06,	4.90,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	21.99,	26.88,	0,
],
"Saudi Arabia":[0,	0,	35.44,	35.44,	27.26,	32.83,	31.30,	28.45,	25.25,	30.72,	41.16,	37.37,	31.79,	30.91,	27.21,	26.23,	25.99,	27.46,	28.78,	28.95,	27.56,	25.95,	25.95,	22.01,	23.10,	25.27,	26.55,	32.65,	27.75,	30.71,	25.94,	23.15,	22.51,	22.81,	22.67,	24.04,
],
"Syria":[0,	0,	24.30,	30.43,	26.32,	24.61,	24.34,	23.35,	21.82,	20.30,	20.15,	20.73,	19.02,	18.88,	17.38,	19.14,	17.69,	17.84,	16.48,	15.93,	15.47,	15.05,	13.62,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,
],
"Türkiye":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,
],
"United Arab Emirates":[0,	0,	0,	0,	0,	0,	0,	0,	0,	19.16,	20.61,	20.65,	26.19,	22.25,	22.85,	23.40,	26.04,	23.22,	20.64,	18.58,	16.71,	15.59,	18.74,	17.55,	17.43,	19.91,	17.04,	0,	0,	0,	0,	0,	0,	0,	0,	0,
],
"Yemen":[0,	0,	24.60,	28.34,	29.55,	27.42,	33.35,	26.32,	17.20,	16.96,	17.75,	18.31,	15.51,	17.98,	22.40,	19.41,	15.52,	13.24,	11.53,	12.02,	10.78,	16.05,	15.51,	16.51,	12.63,	13.25,	14.28,	0,	0,	0,	0,	0,	0,	0,	0,	0,
],
"Belize":[0,	0,	0,	0,	0,	0,	0,	0,	4.70,	5.40,	0,	0,	2.70,	2.46,	2.58,	2.66,	3.12,	3.39,	3.65,	3.65,	4.95,	4.41,	3.76,	3.59,	3.60,	3.67,	3.75,	3.22,	3.50,	3.68,	3.79,	3.73,	3.84,	4.27,	3.59,	3.58,
],
"Costa Rica":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,
],
"Cuba":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,
],
"Dominican Republic":[0,	0,	0,	0,	0,	0,	0,	0,	0,	5.82,	6.05,	5.97,	7.31,	8.15,	6.43,	4.44,	3.97,	4.95,	4.03,	3.85,	3.79,	4.13,	4.16,	3.78,	3.30,	3.31,	3.83,	3.86,	3.74,	3.90,	4.24,	3.86,	3.38,	3.49,	3.61,	3.92,
],
"El Salvador":[0,	0,	21.42,	14.90,	11.13,	9.42,	7.53,	6.74,	5.50,	5.89,	5.26,	5.18,	4.47,	5.66,	5.67,	4.28,	4.34,	4.03,	3.79,	4.26,	3.92,	4.16,	4.26,	4.30,	3.83,	3.79,	3.75,	3.90,	3.73,	3.76,	4.15,	4.34,	4.22,	3.82,	5.00,	4.66,
],
"Guatemala":[0,	0,	0,	0,	0,	0,	0,	11.54,	9.51,	6.96,	5.76,	4.88,	6.41,	7.25,	5.50,	5.39,	3.57,	2.80,	2.94,	2.79,	3.12,	2.75,	2.83,	2.87,	3.18,	3.37,	3.12,	3.23,	3.51,	3.00,	2.82,	3.20,	2.83,	2.90,	3.24,	2.98,
],
"Haiti":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0.19,	0.24,	0.31,	0.47,	0.43,	0.54,	0.90,	1.03,	1.65,	0.83,	0.67,
],
"Honduras":[0,	0,	8.31,	5.44,	0,	3.45,	0,	0,	0,	0,	0,	0,	3.30,	3.28,	3.02,	3.78,	2.67,	2.72,	2.84,	3.17,	3.61,	3.79,	4.06,	4.37,	4.29,	4.66,	4.32,	5.19,	5.59,	5.92,	5.70,	6.08,	5.16,	5.21,	6.10,	5.86,
],
"Jamaica":[0,	0,	3.14,	2.97,	5.32,	3.70,	2.84,	2.27,	1.99,	2.25,	1.87,	1.71,	1.80,	1.72,	1.84,	1.74,	1.66,	1.76,	1.90,	2.01,	2.70,	2.39,	2.59,	2.85,	3.06,	3.26,	3.21,	3.14,	3.34,	3.34,	4.47,	5.63,	5.28,	4.64,	4.13,	4.06,
],
"Mexico":[0,	0,	1.72,	1.97,	2.24,	2.20,	2.51,	2.18,	2.09,	2.01,	2.08,	2.09,	2.11,	2.08,	1.98,	1.80,	1.70,	1.61,	1.38,	1.70,	1.41,	1.80,	1.64,	1.68,	1.69,	1.83,	1.84,	1.70,	1.81,	1.70,	1.86,	2.02,	2.58,	2.47,	2.40,	2.37,
],
"Nicaragua":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	2.93,	2.74,	3.56,	3.18,	2.71,	2.54,	2.58,	2.48,	2.29,	2.21,	2.24,	2.24,	2.76,	2.80,	2.79,	3.06,	2.39,	2.30,	2.27,	2.17,	2.16,	1.80,	1.89,	2.02,
],
"Panama":[0,	0,	0,	0,	0,	0,	4.86,	4.34,	5.46,	4.99,	3.76,	3.82,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,
],
"Trinidad and Tobago":[0,	0,	0,	0,	0,	1.81,	1.89,	0,	0,	0,	0,	0,	0,	0.63,	0.87,	1.32,	2.51,	2.26,	1.97,	2.21,	1.85,	1.92,	2.09,	1.93,	2.11,	2.36,	1.96,	2.15,	2.87,	2.75,	2.30,	2.36,	2.26,	2.83,	2.79,	2.82,
],
"Brunei":[13.23,	12.51,	14.69,	15.24,	13.35,	11.03,	9.27,	9.09,	12.37,	13.44,	12.10,	10.13,	9.80,	9.89,	8.43,	10.84,	6.89,	8.10,	8.25,	8.12,	8.35,	8.44,	7.88,	7.55,	6.97,	6.78,	9.06,	8.48,	8.99,	7.83,	8.20,	9.49,	10.94,	11.05,	9.90,	10.19,
],
"Cambodia":[0,	0,	0,	0,	0,	0,	0,	0,	20.67,	24.19,	19.86,	18.18,	14.69,	11.73,	9.00,	9.19,	9.35,	9.14,	8.05,	6.35,	5.19,	6.44,	7.14,	7.27,	7.13,	7.48,	7.66,	8.89,	9.04,	9.25,	9.59,	9.22,	8.77,	8.11,	8.42,	7.71,
],
"Indonesia":[0,	0,	0,	0,	0,	7.19,	7.75,	8.52,	9.09,	8.13,	5.59,	4.43,	4.11,	2.70,	3.80,	4.60,	4.88,	3.97,	3.58,	3.80,	2.99,	3.35,	3.66,	3.69,	3.78,	4.82,	4.18,	5.05,	4.71,	5.22,	4.31,	4.46,	4.78,	4.08,	4.38,	3.92,
],
"Laos":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	3.85,	3.58,	3.51,	3.07,	3.20,	2.56,	2.33,	2.07,	1.71,	1.08,	0.91,	1.05,	0.81,	0.78,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,
],
"Malaysia":[0,	0,	7.80,	10.72,	9.72,	10.73,	11.23,	11.18,	9.84,	9.05,	6.38,	7.83,	5.86,	6.78,	7.51,	8.55,	8.03,	8.46,	7.49,	7.57,	6.78,	6.06,	5.60,	5.73,	4.96,	5.40,	5.53,	6.09,	6.06,	4.99,	4.21,	3.79,	3.99,	4.04,	3.56,	4.11,
],
"Myanmar":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	10.48,	9.77,	11.20,	10.62,	10.07,	15.02,	13.73,	11.86,	0,	0,	0,	0,	0,	0,	21.51,	17.93,	15.94,	17.77,	17.45,	17.54,	11.22,	10.81,	13.81,	17.61,	22.21,	20.68,
],
"Philippines":[0,	12.48,	10.01,	9.77,	9.69,	10.75,	9.67,	10.52,	10.12,	8.26,	8.09,	7.55,	7.48,	6.77,	6.92,	7.32,	6.76,	6.82,	6.89,	7.10,	6.99,	6.26,	6.38,	6.70,	6.25,	6.87,	6.20,	6.12,	5.50,	6.00,	5.66,	5.21,	5.00,	5.17,	5.08,	5.02,
],
"Singapore":[0,	0,	29.92,	27.51,	29.65,	27.17,	32.99,	29.38,	23.17,	30.36,	29.26,	31.84,	27.43,	26.50,	30.43,	30.12,	30.56,	33.70,	30.93,	39.22,	27.95,	23.41,	32.20,	32.63,	31.40,	27.60,	23.87,	20.95,	19.81,	21.56,	20.03,	19.71,	11.38,	15.43,	15.58,	18.03,
],
"Thailand":[0,	0,	0,	0,	0,	0,	0,	13.67,	12.32,	10.07,	7.82,	6.38,	8.04,	7.19,	5.58,	6.91,	6.01,	5.14,	5.16,	5.23,	6.48,	7.25,	7.04,	6.55,	6.42,	6.13,	6.22,	6.17,	6.40,	6.32,	6.24,	6.06,	5.77,	5.22,	5.01,	4.92,
],
"Timor Leste":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	3.05,	6.29,	5.76,	2.98,	4.12,	2.47,	1.48,	2.22,	2.36,	1.84,	2.37,	1.42,	1.84,	1.55,	2.46,	2.92,	2.42,	2.28,	3.21,
],
"Vietnam":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	7.55,	7.49,	6.80,	7.43,	8.14,	7.94,	7.14,	7.65,	7.33,	7.32,	7.13,	8.01,	7.89,	8.77,	8.38,	8.82,	0,	0,	0,	0,	0,
],
"Algeria":[0,	0,	5.78,	4.04,	6.99,	7.09,	9.37,	9.35,	10.60,	11.75,	12.72,	11.72,	12.00,	12.10,	10.51,	11.11,	11.26,	9.81,	9.03,	8.36,	7.69,	8.76,	9.09,	10.51,	10.26,	13.22,	13.44,	13.57,	15.20,	14.64,	13.60,	14.36,	15.69,	15.02,	12.67,	19.34,
],
"Libya":[0,	0,	0,	0,	0,	0,	0,	0,	0,	11.69,	14.21,	11.53,	10.27,	6.30,	5.24,	4.84,	4.90,	5.02,	3.59,	2.81,	3.09,	0,	0,	0,	8.20,	7.16,	10.91,	0,	0,	0,	0,	0,	0,	0,	0,	0,
],
"Morocco":[0,	0,	14.50,	15.80,	15.11,	15.81,	16.30,	16.00,	17.61,	17.78,	17.03,	12.14,	10.90,	14.53,	12.50,	13.40,	12.27,	10.51,	11.06,	10.65,	10.41,	10.81,	10.91,	9.76,	9.83,	11.56,	11.08,	10.42,	10.44,	10.59,	10.49,	10.47,	11.66,	12.01,	11.84,	11.12,
],
"Tunisia":[0,	0,	0,	6.33,	6.33,	6.19,	6.40,	6.26,	6.67,	6.71,	6.62,	6.18,	6.14,	6.05,	5.90,	6.03,	5.91,	6.01,	6.03,	5.15,	5.20,	5.03,	5.15,	5.33,	5.08,	5.06,	6.53,	7.80,	8.18,	7.07,	6.89,	8.07,	7.86,	7.92,	7.05,	7.05,
],
"Angola":[0,	0,	0,	0,	0,	0,	0,	0,	6.03,	13.88,	6.23,	27.38,	12.88,	10.79,	9.19,	10.93,	11.65,	13.92,	12.29,	8.17,	6.78,	10.46,	10.60,	8.70,	8.70,	12.03,	12.89,	11.48,	12.40,	10.41,	9.50,	8.52,	7.46,	6.68,	5.84,	5.53,
],
"Benin":[0,	10.47,	9.24,	0,	0,	0,	0,	0,	0,	0,	0,	4.52,	2.64,	2.32,	4.07,	4.73,	5.06,	4.82,	5.12,	0,	4.56,	0,	0,	0,	4.93,	4.61,	4.93,	4.40,	4.37,	5.18,	3.82,	3.24,	2.41,	2.77,	3.18,	3.75,
],
"Botswana":[9.94,	9.51,	10.18,	10.33,	9.90,	10.11,	10.23,	9.06,	7.73,	8.01,	8.56,	7.52,	8.17,	8.99,	9.00,	9.15,	8.48,	8.23,	8.07,	7.58,	6.46,	5.98,	6.17,	6.43,	6.11,	6.17,	6.15,	7.14,	9.96,	9.27,	8.15,	8.46,	8.66,	8.66,	8.09,	7.83,
],
"Burkina Faso":[11.99,	16.01,	13.14,	11.62,	11.25,	9.42,	7.96,	7.09,	6.46,	6.99,	6.34,	5.76,	6.24,	5.88,	6.05,	6.10,	5.96,	5.94,	5.08,	6.20,	6.69,	6.29,	5.66,	5.63,	5.19,	4.89,	6.08,	6.14,	5.39,	5.20,	7.95,	9.53,	8.79,	8.37,	9.21,	15.11,
],
"Burundi":[0,	0,	17.28,	16.38,	11.85,	13.83,	20.11,	16.36,	20.60,	29.12,	28.34,	24.76,	19.73,	23.90,	22.61,	15.17,	12.02,	13.39,	9.63,	8.76,	6.61,	0,	0,	0,	6.73,	7.14,	8.07,	9.20,	9.94,	8.31,	8.26,	9.76,	7.42,	6.72,	6.70,	10.23,
],
"Cameroon":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	8.01,	7.78,	8.50,	8.99,	8.77,	9.21,	9.84,	9.22,	7.89,	8.39,	8.48,	6.36,	6.85,	6.07,	5.51,	5.48,	5.68,	5.92,	5.99,	5.70,	5.81,	5.77,	5.50,	5.63,
],
"Cape Verde":[0,	0,	0,	0,	0,	0,	1.59,	2.45,	1.79,	1.93,	2.33,	2.08,	2.74,	2.43,	1.83,	2.23,	1.95,	1.94,	1.69,	1.78,	1.99,	1.47,	1.26,	1.57,	1.60,	1.57,	1.77,	1.78,	2.06,	1.68,	1.76,	1.57,	1.79,	1.78,	1.71,	1.74,
],
"Central African Republic":[0,	0,	0,	6.80,	7.03,	7.18,	5.61,	5.64,	10.31,	0,	0,	0,	0,	0,	6.53,	10.29,	8.83,	6.75,	0,	8.46,	9.67,	10.93,	13.96,	14.47,	11.75,	21.15,	11.27,	11.28,	12.14,	9.69,	7.61,	10.58,	7.40,	10.92,	9.70,	12.72,
],
"Chad":[0,	0,	0,	0,	0,	0,	0,	7.67,	8.78,	6.10,	6.20,	7.22,	7.48,	8.71,	8.53,	6.84,	7.93,	7.23,	21.50,	26.29,	31.31,	32.96,	23.67,	22.40,	0,	24.52,	12.77,	11.01,	21.14,	14.77,	17.20,	14.93,	15.42,	14.95,	14.60,	15.34,
],
"Cote d'Ivoire":[0,	0,	0,	0,	0,	0,	0,	0,	0,	3.80,	0,	0,	0,	0,	0,	7.94,	8.11,	7.78,	7.51,	7.75,	7.55,	8.70,	7.79,	7.63,	6.82,	6.27,	7.02,	7.54,	7.09,	5.33,	5.92,	5.16,	4.73,	4.28,	3.92,	3.97,
],
"Djibouti":[0,	0,	16.22,	17.67,	14.36,	13.44,	14.38,	15.69,	14.94,	15.05,	15.40,	14.99,	14.36,	15.32,	16.97,	18.33,	14.95,	17.18,	19.22,	10.91,	9.11,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,
],
"Equatorial Guinea":[0,	0,	0,	0,	0,	0,	0.39,	1.45,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	7.63,	7.45,	6.21,	0,	0,	0,	0,	2.42,	2.51,	4.46,	5.63,	5.90,	7.79,	10.15,	10.48,	7.75,	7.53,
],
"Eritrea":[0,	0,	0,	0,	0,	41.00,	32.62,	31.09,	38.30,	25.48,	47.72,	41.88,	49.79,	48.05,	44.47,	46.37,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,
],
"Ethiopia":[26.01,	28.22,	30.77,	22.58,	17.02,	15.70,	11.45,	9.01,	7.88,	15.10,	28.80,	36.17,	29.53,	19.23,	14.84,	11.98,	13.27,	12.06,	10.27,	9.08,	7.94,	6.92,	6.13,	5.98,	5.22,	4.54,	4.40,	4.07,	3.82,	3.75,	4.01,	3.78,	3.61,	3.57,	6.85,	7.54,
],
"Gabon":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	8.33,	6.45,	6.93,	7.85,	7.73,	6.01,	6.07,	0,	0,	0,	8.11,	6.63,	6.76,	4.63,	4.82,	5.33,	6.63,	10.00,	9.07,	9.09,	8.68,	9.29,	8.13,	7.27,
],
"Gambia":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	3.45,	2.53,	2.96,	2.55,	1.62,	2.24,	1.89,	3.17,	9.51,	3.41,	0,	0,	4.13,	4.39,	6.26,	5.15,	0,	0,	3.30,	3.36,	3.25,	3.63,	3.10,	2.64,
],
"Ghana":[2.30,	2.26,	2.65,	3.31,	2.56,	2.33,	2.22,	2.41,	2.15,	2.23,	2.63,	2.78,	3.44,	1.79,	2.28,	2.34,	1.88,	1.89,	1.70,	2.06,	1.66,	1.93,	1.42,	2.23,	2.70,	1.86,	2.31,	2.11,	1.47,	1.78,	1.56,	1.53,	1.11,	1.41,	1.25,	1.92,
],
"Guinea":[0,	0,	0,	10.50,	8.78,	7.25,	7.72,	0,	0,	6.69,	8.50,	9.90,	8.99,	15.36,	16.75,	11.97,	12.42,	0,	0,	0,	0,	0,	0,	0,	11.41,	12.61,	11.10,	11.60,	11.66,	10.17,	10.42,	9.84,	8.63,	9.96,	15.80,	13.82,
],
"Guinea-Bissau":[0,	0,	0,	0,	0,	0,	1.08,	1.97,	2.29,	2.04,	5.63,	0,	10.38,	7.86,	9.75,	7.98,	0,	9.39,	0,	0,	0,	7.52,	9.83,	8.76,	17.99,	15.76,	8.25,	6.88,	6.16,	7.23,	7.01,	8.08,	6.35,	5.97,	6.77,	6.41,
],
"Kenya":[10.01,	8.98,	8.86,	7.62,	5.89,	5.33,	4.98,	5.41,	6.21,	5.76,	5.43,	5.97,	6.45,	6.99,	7.18,	7.18,	7.38,	7.41,	7.32,	7.46,	7.47,	6.73,	6.36,	6.86,	6.74,	6.01,	5.12,	5.05,	4.92,	4.92,	4.94,	4.56,	4.47,	4.49,	4.43,	4.11,
],
"Lesotho":[8.92,	11.30,	10.87,	9.31,	7.73,	6.94,	6.88,	7.78,	6.87,	6.14,	5.60,	7.08,	8.44,	6.59,	6.01,	5.78,	5.59,	5.13,	4.56,	4.65,	2.86,	3.99,	5.52,	3.67,	3.58,	3.34,	3.77,	3.58,	3.64,	4.39,	3.83,	3.52,	3.41,	2.89,	2.76,	2.73,
],
"Liberia":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	4.15,	5.34,	3.17,	1.24,	1.35,	1.61,	1.81,	1.78,	1.85,	1.81,	1.41,	1.29,	1.26,	1.14,	1.24,	1.30,	1.20,	2.84,	3.44,	3.51,
],
"Madagascar":[9.03,	6.16,	7.23,	7.91,	3.84,	5.45,	4.69,	4.88,	6.96,	8.53,	6.77,	6.80,	6.65,	7.81,	8.67,	6.87,	4.96,	5.02,	4.56,	5.98,	6.13,	5.90,	4.64,	5.18,	5.15,	4.55,	4.43,	3.99,	3.70,	3.39,	3.71,	3.55,	4.12,	4.95,	3.77,	3.45,
],
"Malawi":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	2.17,	1.89,	2.61,	4.26,	3.10,	2.60,	2.88,	3.34,	2.60,	2.76,	2.90,	3.91,	3.18,	2.31,	2.29,	2.53,	3.04,	3.94,	3.67,	3.09,	3.50,	3.96,
],
"Mali":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	7.63,	7.06,	6.36,	6.82,	6.54,	6.40,	6.30,	6.31,	7.73,	6.21,	6.78,	6.04,	7.70,	5.88,	7.60,	11.27,	11.62,	13.21,	13.90,	11.89,	13.02,	12.57,	12.38,	14.18,
],
"Mauritania":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	12.47,	10.65,	11.00,	0,	11.95,	12.40,	0,	0,	9.82,	9.93,	9.19,	8.40,	10.30,	10.45,	11.22,	11.44,	13.12,	11.97,	8.22,	9.61,
],
"Mauritius":[0,	0,	1.11,	1.28,	1.25,	1.26,	1.11,	1.11,	1.03,	0.83,	0.73,	0.72,	0.85,	0.82,	0.80,	0.75,	0.70,	0.69,	0.69,	0.65,	0.68,	0.66,	0.61,	0.63,	0.62,	0.78,	0.66,	0.58,	0.73,	0.68,	0.64,	0.53,	0.50,	0.56,	0.48,	0.52,
],
"Mozambique":[11.13,	12.48,	11.39,	10.75,	10.11,	9.97,	10.74,	5.83,	6.01,	5.21,	5.94,	5.76,	5.43,	4.31,	4.83,	4.88,	5.50,	4.13,	3.00,	3.03,	3.04,	2.68,	3.27,	2.81,	2.96,	2.90,	2.43,	2.57,	3.20,	3.40,	4.22,	4.96,	6.19,	6.21,	4.55,	5.63,
],
"Namibia":[0,	0,	20.21,	15.43,	11.52,	6.85,	5.61,	5.83,	5.53,	6.58,	6.58,	8.69,	7.79,	8.81,	8.70,	8.37,	8.83,	9.46,	9.46,	10.01,	11.05,	10.56,	10.50,	9.29,	9.04,	8.37,	10.35,	10.37,	9.51,	9.25,	9.17,	8.81,	8.39,	8.20,	7.99,	7.48,
],
"Niger":[0,	0,	0,	0,	0,	0,	0,	6.43,	6.67,	5.88,	6.13,	6.22,	6.67,	7.41,	5.18,	5.19,	5.26,	4.83,	0,	0,	4.38,	4.10,	5.98,	6.26,	9.51,	5.08,	5.70,	0,	8.30,	9.28,	8.48,	8.89,	7.75,	5.59,	7.29,	10.23,
],
"Nigeria":[0,	0,	2.23,	2.11,	1.47,	1.80,	2.35,	3.87,	3.67,	3.20,	3.49,	4.07,	2.20,	2.53,	4.92,	2.46,	2.68,	2.23,	2.83,	2.04,	3.40,	3.28,	3.25,	3.35,	3.39,	3.32,	3.10,	3.78,	4.44,	3.59,	3.95,	3.67,	5.23,	7.59,	4.52,	5.52,
],
"Rwanda":[0,	0,	0,	0,	17.81,	19.77,	21.44,	21.33,	23.72,	21.14,	23.13,	16.76,	16.26,	15.18,	12.71,	11.42,	9.70,	7.69,	7.98,	6.09,	5.82,	5.94,	5.11,	4.44,	4.24,	4.03,	4.01,	4.57,	4.94,	4.98,	4.68,	4.25,	4.40,	4.79,	4.49,	4.55,
],
"Senegal":[0,	0,	0,	0,	0,	0,	8.77,	9.30,	8.23,	8.58,	8.74,	8.12,	7.44,	6.74,	6.87,	6.49,	5.89,	6.06,	5.97,	6.22,	6.17,	6.33,	5.60,	5.56,	4.85,	5.67,	5.25,	5.27,	6.69,	6.55,	7.39,	6.30,	5.31,	6.80,	5.72,	5.50,
],
"Seychelles":[9.16,	8.28,	8.74,	8.49,	9.33,	4.53,	3.84,	4.30,	3.55,	3.70,	2.86,	3.17,	3.03,	3.80,	2.98,	3.89,	4.76,	4.11,	3.25,	3.50,	4.26,	3.18,	2.13,	2.35,	2.43,	2.74,	6.81,	4.06,	4.07,	4.12,	3.69,	3.75,	2.98,	6.36,	3.76,	4.43,
],
"Sierra Leone":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	15.36,	14.36,	10.81,	10.91,	8.75,	7.91,	8.94,	10.40,	5.84,	6.16,	4.81,	4.03,	3.85,	4.11,	5.52,	4.45,	4.78,	4.52,	3.41,	3.16,	2.14,	2.25,	2.33,	2.35,
],
"Somalia":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	22.26,	40.44,	37.29,	34.82,	25.97,	28.57,	22.84,	20.80,	24.14,	15.79,	19.79,
],
"South Africa":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	5.50,	5.88,	6.16,	5.78,	5.34,	4.91,	4.68,	4.33,	4.00,	3.83,	3.55,	3.57,	3.61,	3.56,	3.49,	3.34,	3.25,	3.16,	2.97,	2.81,	2.76,	2.48,	2.37,	2.21,
],
"South Sudan":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	28.97,	27.74,	25.93,	23.68,	25.92,	9.01,	6.24,	9.83,	7.93,	5.47,	3.43,	5.80,	8.64,
],
"Sudan":[0,	0,	17.10,	11.73,	11.78,	20.76,	19.38,	16.09,	13.64,	12.93,	30.54,	47.76,	43.16,	25.03,	25.35,	14.86,	28.20,	16.77,	19.34,	20.85,	25.26,	29.08,	0,	0,	0,	0,	0,	21.92,	22.84,	25.65,	10.56,	8.73,	9.10,	9.50,	0,	0,
],
"Eswatini":[5.58,	5.36,	6.32,	6.32,	5.84,	6.81,	6.64,	7.49,	6.40,	6.37,	6.55,	5.68,	5.72,	4.96,	4.86,	5.68,	4.97,	6.48,	6.49,	5.88,	6.06,	6.34,	7.48,	8.74,	6.88,	6.56,	5.73,	5.27,	6.10,	5.57,	5.86,	5.65,	5.67,	5.78,	5.43,	4.72,
],
"Tanzania":[0,	0,	0,	12.68,	9.86,	6.92,	6.36,	8.60,	9.57,	9.90,	10.29,	8.55,	8.86,	9.66,	7.88,	5.76,	4.81,	4.44,	4.43,	4.27,	3.86,	3.87,	4.52,	4.75,	4.67,	5.17,	5.88,	6.36,	6.47,	6.37,	6.37,	6.14,	6.18,	6.10,	5.93,	6.03,
],
"Togo":[0,	10.76,	10.87,	11.48,	13.52,	15.49,	11.35,	10.84,	0,	0,	0,	0,	0,	0,	0,	11.40,	9.87,	8.15,	0,	0,	10.09,	8.20,	7.94,	5.99,	6.09,	5.87,	5.94,	5.31,	5.90,	8.60,	7.90,	14.73,	9.36,	10.95,	15.94,	12.72,
],
"Uganda":[0,	0,	0,	0,	0,	0,	0,	0,	0,	11.98,	13.47,	13.88,	11.96,	10.72,	10.07,	10.61,	11.69,	12.02,	11.33,	10.88,	10.75,	10.36,	15.99,	16.76,	8.67,	6.98,	6.91,	6.83,	6.93,	6.74,	7.41,	9.38,	12.09,	11.54,	9.66,	9.58,
],
"Zambia":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	6.79,	7.46,	8.19,	8.29,	7.98,	8.10,	7.65,	6.75,	6.21,	5.66,	6.72,	6.34,	5.97,	5.21,	5.18,	4.21,	3.43,	3.22,	3.96,	4.69,
],
"Zimbabwe":[0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	9.27,	23.27,	0,	0,	0,	4.51,	6.06,	9.11,	8.93,	9.23,	9.19,	7.36,	5.54,	5.61,	5.50,	6.87,	7.72,	4.90,	1.38,
],


}

export default govData