const chalk = require('chalk');

const EXIA_LOGO = ` _____        _        
|  ___|      (_)       
| |__  __  __ _   __ _ 
|  __| \\ \\/ /| | / _\` |
| |___  >  < | || (_| |
\\____/ /_/\\_\\|_| \\__,_|`;

const PADDED_EXIA_LOGO = EXIA_LOGO.concat('\n                       ')
  .split('\n')
  .map(line => `    ${line}    `)
  .join('\n');

const STYLED_EXIA_LOGO = chalk.bgBlue(
  chalk.white(chalk.bold(PADDED_EXIA_LOGO)),
);

const EXIA_LOGO_IMAGE = `
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMOxXMMMMMMMMMMMMWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0o0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0:lXMMMMMMMWKdc::;;:;;;;;;;;;;;;;:::::cdKWMMMMMMW0;:KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWO;cKWMMMMWx'                           .dNMMMMWO,,OMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk,;0WMMMX:                             ;XMMMWO''OWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NXNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx';0WMMX:                             ;XMMWk'.kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXN
XdclkXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWd.,OWMX:                             ;XMWk..xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOo:oK
MNOc.':d0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo.'kWX:                             ;XWx..dNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKxc'.;xNM
MMMW0l. .,lkXWMMMMMMMMMMMMMMMMMMMMMMMMMMMNo..kK:                             ;0d..oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOo;. .cONMMM
MMMMMWKd'   .:d0NMMMMMMMMMMMMMMMMMMMMMMMMMXc .dc                             ;c. lNMMMMMMMMMMMMMMMMMMMMMMMMMWKxc'   .l0WMMMMM
MMMMMMMWXx;.   .,lkXWMMMMMMMMMMMMMMMMMMMMMWO; .c:    .,...............,.    ,;. :ONMMMMMMMMMMMMMMMMMMMMMWXOo;.    ,dKWMMMMMMM
MMMMMMMMMMNO:.     .:d0NMMMMMMMMMMMMMMMW0d;.,' .c:.  ';               ''   ,;. ;:',oONMMMMMMMMMMMMMMMWKxc'     .;xXMMMMMMMMMM
MMMMMMMMMMMMW0l.      .,lOXWMMMMMMMMMNk:.    '. .:c. ',               ''  ;;  ,:.   .;xXMMMMMMMMMWXOo;.      .:ONMMMMMMMMMMMM
MMMMMMMMMMMMMMWKd'        .:d0NMMMMNk;.      .,.  :c.,;               ''.;;  'c.       'dNMMMMWKxc'        .l0WMMMMMMMMMMMMMM
NWMMMMMMMMMMMMMMMXx;.        .,lkXXl.         .,.  :ll;               'c:,  'c.          :0XOo;.         'dKWMMMMMMMMMMMMMMMN
:ckXWMMMMMMMMMMMMMMNO:.          .,,'..        .,.  ;kc               ;d,  .c'         .'',.          .;xXWMMMMMMMMMMMMMWNkl;
;  'lkXMMMMMMMMMMMMMMW0l.           ..'''.      .,.  cc               ,;  .:'       .''..           .:ONMMMMMMMMMMMMMWNOl'  ,
O'    'lONMMMMMMMMMMMMMWKo'             ,;.      .'. ;:               '' .:,       ',             .l0WMMMMMMMMMMMMMNOl'    .k
Wd.      'oONMMMMMMMMMMMMWXx;.          .;'       '. ;c'...........'.';' ,:       .,.           'dKWMMMMMMMMMMMMN0o,.     .oN
MNl        .,o0NMMMMMMMMMMNx::,.         ;:.      .'  .................  ;,       ,,         .',;dXMMMMMMMMMMW0o,.        cXM
MMK,          .,o0WMMMMMMKc.  .;;.       .,,',''..''                     ;;...'''''.       .',.   :KWMMMMMW0d;.          ,0MM
MMWk.            .;dKWMM0;      .,;,.        ..'',;.       ........      ';''...         .,'.      ,0WMWKd;.            .xWMM
MMMWd.              .;d0d.         ';,.                   :OKXKXXK0l.                 .',.         .o0x:.              .oNMMM
MMMMNx.                .;c:,.        .,,.                .xMMMMMMMM0'               .''.        .,:c;.                .xNMMMM
MMMMMW0:                  .;::'        .',,.             .dMMMMMMMMO.            ..'..        '::;.                  ;0WMMMMM
MMMMMMMXo.                   .:c.         .,,.            oWMMMMMMMk.          .''.         .cc.                   .lXMMMMMMM
MMMMMMMMWk,                    ;c.          .','.         lNMMMMMMMd.        .'..          .c:                    'kWMMMMMMMM
MMMMMMMMMMKc.                   ::.            .''.       :NMMMMMMWo      ..'.             cc.                  .:KWMMMMMMMMM
MMMMMMMMMMMNx.                  .c:              .',.     ,OKKKKKK0:    ....              ;c.                  .dNMMMMMMMMMMM
MMMMMMMMMMMMW0;            .cc,. .c,               .:'     ........    .,.               ,l. .':l'            ;OWMMMMMMMMMMMM
MMMMMMMMMMMMMMXo.          ,KWNKo.'l'               ';.                ,'               .l,.lKNWX;          .lXMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMWk,         '0MMMO..l:  ,ddl;'.      .::'''.       .''';;.      ..;cdd,  :o..kMMM0,         'kWMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMKc.       .kMMM0' lc  :XMMWNKkdc;'. .''',:;.    ,;,'''. .';cdkKNWMMNc  cl..OMMMO.        :KWMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMNd.      .xMMMK, cl  .oKWMMMMMMWNKkd:.   .;'.',.   .;dkKNWMMMMMMWXd.  ll '0MMMk.      .dNMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMWO:.     oWMMK, cl.   .ckNMMMMMMMMMW0l.  .';,.  .l0WMMMMMMMMMNOc.    lc ,KMMWd.    .;OWMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMXxl:'   :XMMX; :l. ..   'o0WMMMMMMMMNd.       .dNMMMMMMMMN0o,   .. .lc ,KMMNc   .:lxXMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMM0,.,cc:..;xKK: ;d;'',,.   .;oxkxxxxdc.         .cddxxxxxo;.   .,,'';d: ;KKx;..;cc,.'OMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMNo.  .,cc;..,. ,kc.  .,.                                     .,.   :k: .,..;cc;.   lNMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMNl.    .;c:,. ,d'     .,.         ...............         .,'     .d; .,:c;.     cXMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMNo.     .';c:ox'      .cl,..........          ....... .,ll.      'xd:c;,.     .lXMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMNo.   .okl,'lx,       ;xol,.                       .'lox:       'xo,,lkd.    lXMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMNo.   oWMK;.l;       ,l,:'                         .;,l;       ,l.;KWWd.   lXMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMNo.  .oKWx.,c'      ,l,:'                         .;,l;      'l,.dWKd.   lXMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMNo.   .lk:..c;     ,l,:'                         .;,l;     ;c. :xl.    lXMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMNo.    ... .;:.   'l,:'                         .;,l,   .::.  ..    .lNMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMNo.         ':'  'c,:'                         .;,l,  'c,         .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo.         .;:;:,.:'        .;,..',:.        .;.,:;::'.        .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo.      .c' cd'  ',.      .c;     ;l.      .''  .cc:x;       .lXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo.     .d: ':.   ..'.    :;  ...  :c.   ....    ,,o0;      .lNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNo.     '. ':.      .,'.;:. ,:,;:..c:..'.       ,,,;      .oNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNx;.      .xx,       .;:..:;.  ':..:;.       'ox'      .;xNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXOdc,. .OMNk;.       .::.    ,c.        ,dXWO' .,cdOXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXOkXMMMNk:.     ,o.     .l:     .;kNMMMXkOKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0c.   ;o.     .lc   .:ONMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0l. ;o.     .lc .c0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXddd.     .oxdKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk.     .xWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK;     '0MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWk.   .dWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNc...:KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
`.trim();

module.exports = {
  EXIA_LOGO,
  PADDED_EXIA_LOGO,
  STYLED_EXIA_LOGO,
  EXIA_LOGO_IMAGE,
};
