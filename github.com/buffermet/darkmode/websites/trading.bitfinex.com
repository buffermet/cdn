/* bitfinex */

body {
	background-color: black;
}
.dark-mode .header__wrapper,
.group-BfVZxb4b,
.chart-page [class*=selected], .chart-page [class*=active],
.chart-controls-bar,
[class*=layout__area], [class*=layout__area] [class*=inner], [class*=layout__area] [class*=toolbar] [class*=group],
[class*=layout__area] [class*=inner],
.bg-wrap,
div#footer {
	background: black;
}
.table-vir__row-striped.table-vir__row-even,
.ui-dropdown__button,
input.ui-input,
.layout__area--left [class*=drawingToolbar] [class*=arrow], .layout__area--left [class*=drawingToolbar] [class*=isOpened] [class*=control] [class*=arrow],
[class*=layout__area] [class*=button]:not([class*=buttons]):hover:before, [class*=layout__area] [class*=button]:not([class*=buttons]):hover [class*=bg], [class*=layout__area] [class*=button]:not([class*=buttons])[class*=isOpened]:before, [class*=layout__area] [class*=button]:not([class*=buttons])[class*=isOpened] [class*=bg], [class*=layout__area] [data-role=button]:hover:before, [class*=layout__area] [data-role=button]:hover [class*=bg], [class*=layout__area] [data-role=button][class*=isOpened]:before, [class*=layout__area] [data-role=button][class*=isOpened] [class*=bg],
.chart-page .context-menu-wrapper [class*=menu], .chart-page .context-menu-wrapper [class*=menu] [class*=item], .chart-page #overlap-manager-root [class*=menuWrap], .chart-page #overlap-manager-root [class*=menuWrap] [class*=item], .chart-page #overlap-manager-root [class*=dialog]:not([class*=tv-dialog]), .chart-page #overlap-manager-root [class*=dialog]:not([class*=tv-dialog]) [class*=item], .chart-page #overlap-manager-root .context-menu, .chart-page #overlap-manager-root .context-menu [class*=item], .chart-page #overlap-manager-root [class*=drawer], .chart-page #overlap-manager-root [class*=drawer] [class*=item],
.layout__area--left [class*=drawingToolbar] [class*=button][class*=isActive] [class*=bg] {
	background: #111;
}
.main-ticker,
.collapsible {
	border: none;
}
.ui-dropdown__button,
input.ui-input {
	border-color: #222 !important;
}
