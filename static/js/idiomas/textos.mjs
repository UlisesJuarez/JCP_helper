//Guardamos todas las rutas en un array
let textosFooter = [
    ['Adicionales', 'Términos de uso y condiciones', 'Política de privacidad', 'Política de cookies', 'Manual de usuario', 'Banco de datos API', 'Saber más', 'Saber más', 'Nuestro equipo', 'Coded with love ❤️ by JCP_team ', '© Todos los derechos reservados'],
    ['Additional', 'Terms of use and conditions', 'Privacy policy', 'Cookies policy', 'User manual', 'API data bank', 'Know more', 'Know more', 'Our team', 'Coded with love ❤️ by JCP_team ', '© All rights reserved'],
    ['Adicionais', 'Termos de uso e condições', 'Política de privacidade', 'Política de cookies', 'Manual do usuário', 'Banco de dados API', 'Saiba mais', 'Saiba mais', 'Nosso team', 'Codificado com amor ❤️ por JCP_team ', '© Todos os direitos reservados'],
    ['附加', '使用条款和条件', '隐私政策', 'Cookies政策', '用户手册', 'API数据库', '了解更多', '了解更多', '我们的团队', '用爱编码❤️ 由 JCP_team', '© 版权所有']
];

let objetoConfiguraciones = {
    "textEspanol": {
        texts: ["Configuraciones", "Configuraciones", "Configuraciones", "volver", "Cuenta de usuario", "Cuenta de usuario", "Opciones de la cuenta.", "Modificar cuenta", "Acceso a informes", "Vistazo perfil", "Eliminar cuenta", "Colores", "Colores", "Selector de temas", "Paleta actual", "Accesibilidad", "Accesibilidad", "Selector de temas adaptados", "Paleta actual", "Idioma", "Idioma", "Idiomas disponibles", "Español", "Inglés", "Portugués", "Mandarín", "¿Desea eliminar su cuenta?", "Esta acción es irreversible, deseas continuar", "Cancelar", "Continuar",]
    },
    "textIngles": {
        texts: ["Settings", "Settings", "Settings", "return", "User account", "User account", "Account Options.", "Modify account", "Access to reports", "profile look", "Delete account", "Colors", "Colors", "Theme selector", "Current Palette", "Accessibility", "Accessibility", "Custom theme selector", "Current Palette", "Language", "Language", "Available languages", "Spanish", "English", "Portuguese", "Mandarin", "Do you want to delete your account?", "This action is irreversible, you wish to continue", "Cancel", "Continue",]
    },
    "textPortugues": {
        texts: ["Definições", "Definições", "Definições", "Retorna", "Conta de usuario", "Conta de usuario", "Opções de conta.", "Modificar conta", "Acesso a relatórios", "look de perfil", "Eliminar conta", "Cores", "Cores", "Seletor de tema", "Paleta atual", "Acessibilidade", "Acessibilidade", "Seletor de tema personalizado", "Paleta atual", "Idioma", "Idioma", "Idiomas disponíveis", "Espanhol", "Inglês", "Português", "Mandarim", "Deseja deletar sua conta?", "Esta ação é irreversível, você deseja continuar", "Cancelar", "Continuar",]
    },
    "textChino": {
        texts: ["设置", "设置", "设置", "返回", "用户帐号", "用户帐号", "账户选项。", "修改账户", "访问报告", "个人资料外观", "删除帐户", "颜色", "颜色", "主题选择器", "当前调色板", "辅助功能", "辅助功能", "自定义主题选择器", "当前调色板", "成语", "成语", "可用语言", "西班牙语", "英语", "葡萄牙语", "普通话", "你想删除你的帐户吗?", "此操作不可逆,您希望继续", "取消", "继续",]
    }
}

let rutas = {
    "index": {
        "textEspanol": {
            texts: ['Home page', 'Acceder', 'Sign up estudiante', 'Sign up profesor', 'Cookies.', 'Privacidad.', 'Términos.', 'Saber más.', 'Acceder', 'Registrarse', 'Acceder', 'Diseñe', 'Pruebas totalmente personalizadas.', 'Mida', 'Obtenga reportes de sus resultados.', 'Machine Learning', 'Mediciones basadas en modelos de ML.', 'Comparta', 'Acceda a bancos de datos.', 'Versatilidad garantizada', 'Bienvenido a JCP_helper', 'Obtenga métricas de sus resultados en el aprendizaje y enseñanza de programación.', 'Conocer más', 'Saque el máximo provecho a JCP', 'Diseñar', 'Cree pruebas personalizadas de acuerdo a sus necesidades.', 'Evaluar', 'Ponga a prueba los conocimientos adquiridos.', 'Medir', 'Mida sus resultados y documente su avance.', 'Compartir', 'Acceda a bancos de datos con preguntas de otros usuarios.', 'Machine Learning', 'Obtenga métricas basadas en nuestros modelos de ML.', 'Aprenda donde usted quiera.', 'Utilize JCP donde usted quiera, en celular, tableta o computadora', 'Oferta incomparable', 'Oferta de valor incomparable.', 'Conozca todas la funcionalidades.', 'Característica', 'JCP_helper', 'Google Forms', 'Online exam builder', 'Kahoot!', 'Growledge', 'Gexcat', 'Socrative', 'Pruebas personalizadas', 'Banco de preguntas', 'Interfaz responsiva', 'Interfaz personalizable', 'Generador de reportes', 'Code runner', 'Registro de resultados', 'Modelos de análisis de métricas', '¿Qué tipo de usuario es?', 'Estudiante', 'Docente', ...textosFooter[0]]
        },
        "textIngles": {
            texts: ['Home page', 'Log in', 'Sign up student', 'Sign up teacher', 'Cookies.', 'Privacy.', 'Terms.', 'Know more.', 'log in', 'Check in', 'log in', 'Design', 'Fully customized tests.', 'measure', 'Get reports of your results.', 'Machine Learning', 'ML model-based measurements.', 'Share', 'Access data banks.', 'Guaranteed versatility', 'Welcome to JCP_helper', 'Get metrics of your results in learning and teaching programming.', 'Know more', 'Get the most out of JCP', 'Design', 'Create custom tests according to your needs.', 'Evaluate', 'Test the acquired knowledge.', 'To size', 'Measure your results and document your progress.', 'Share', 'Access databases with questions from other users.', 'Machine Learning', 'Get metrics based on our ML models.', 'Learn where you want.', 'Use JCP wherever you want, on cell phone, tablet or computer', 'Incomparable offer', 'Unmatched value offer.', 'Get to know all the features.', 'Characteristic', 'JCP_helper', 'Google Forms', 'Online exam builder', 'Kahoot!', 'Growledge', 'Gexcat', 'Socrative', 'Custom tests', 'Question bank', 'Responsive interface', 'Customizable interface', 'Report generator', 'Code runner', 'Results record', 'Metric analysis models', 'What kind of user is it?', 'Student', 'Teacher', ...textosFooter[1]]
        },
        "textPortugues": {
            texts: ['Pagina inicial', 'Acessar', 'Cadastre-se aluno', 'Inscreva-se professor', 'Cookies.', 'Privacidade.', 'Termos.', 'Saber mais.', 'Acessar', 'Check-in', 'Acessar', 'Projeto', 'Testes totalmente personalizados.', 'a medida', 'Obter relatórios de seus resultados.', 'Aprendizado de máquina', 'Medições baseadas em modelo de ML.', 'Compartilhar', 'Acessar bancos de dados.', 'Versatilidade garantida', 'Bem-vindo ao JCP_helper', 'Obtenha métricas de seus resultados em aprender e ensinar programação.', 'Saber mais', 'Aproveite ao máximo o JCP', 'Projeto', 'Crie testes personalizados de acordo com suas necessidades.', 'Avalie', 'Teste os conhecimentos adquiridos.', 'Ao tamanho', 'Meça seus resultados e documente seu progresso.', 'Compartilhar', 'Acessar bancos de dados com perguntas de outros usuários.', 'Aprendizado de máquina', 'Obter métricas com base em nossos modelos de ML.', 'Aprenda onde quiser.', 'Use o JCP onde quiser, no celular, tablet ou computador', 'Oferta incomparável', 'Oferta de valor inigualável.', 'Conheça todas as funcionalidades.', 'Característica', 'JCP_helper', 'Formulários do Google', 'Criador de exames online', 'Kahoot!', 'Crescimento', 'Gexcat', 'Socrativo', 'Testes personalizados', 'Banco de perguntas', 'Interface responsiva', 'Interface personalizável', 'Gerador de relatórios', 'Corredor de código', 'Registro de resultados', 'Modelos de análise métrica', 'Que tipo de usuário é?', 'Aluna', 'Professora', ...textosFooter[2]]
        },
        "textChino": {
            texts: ['主页', '访问', '注册学生', '注册老师', '饼干。', '隐私。', '条款', '了解更多。', '访问', '报到', '访问', '设计', '完全定制的测试。', '措施', '获取结果报告。', '机器学习', '基于 ML 模型的测量。', '分享', '访问数据库。', '保证多功能性', '欢迎来到 JCP_helper', '获取您在编程学习和教学中的成绩指标。', '了解更多', '充分利用 JCP', '设计', '根据您的需要创建自定义测试。', '评估', '测试所获得的知识。', '调整大小', '衡量你的结果并记录你的进步。', '分享', '使用其他用户的问题访问数据库。', '机器学习', '根据我们的 ML 模型获取指标。', '了解你想要的地方。', '随时随地在手机、平板电脑或电脑上使用 JCP', '无与伦比的报价', '无与伦比的价值提供。', '了解所有功能。', '特征', 'JCP_helper', '谷歌表格', '在线考试生成器', 'Kahoot!', '咆哮', '吉克斯猫', '苏格拉底', '自定义测试', '问题库', '响应式界面', '可定制的界面', '报告生成器', '代码运行器', '结果记录', '度量分析模型', '它是什么样的用户？', '学生', '老师', ...textosFooter[3]]
        }
    },
    "configuraciones_docente": {
        ...objetoConfiguraciones
    },
    "configuraciones_alumno": {
        ...objetoConfiguraciones
    },
    "politica_privacidad": {
        "textEspanol": {
            texts: ['Política de privacidad.', 'Política de privacidad.', 'Política de privacidad.', 'Descargar', 'Cookies', 'Saber más', 'Términos', 'Secciones', 'Fundamental', 'Tratamiento datos', 'Obtención datos', 'Tus derechos', 'Finalidad tratamiento', 'Seguridad datos', 'Contenido terceros', 'Política cookies', 'Legitimación', 'Categorías', 'Conservación', 'Exactitud datos', 'Consentimiento', 'Revocabilidad', 'Cambios política', 'Descargar términos', 'Descargar términos', 'Descargar', 'Descague los términos y condiciones, políticas de privacidad, políticas de cookies e información adcional del proyecto.', 'Aspectos fundamentales', 'Aspectos fundamentales', 'JCP_helper te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio JCP_helper.com.', 'En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3 / 2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales(LOPD GDD). Cumple también con el Reglamento(UE) 2016 / 679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas(RGPD).', 'El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.', 'Tratamiento de datos', 'Tratamiento de datos', 'En el tratamiento de tus datos personales, el Titular aplicará los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protección de datos: ', '⚫ Principio de licitud, lealtad y transparencia: El Titular siempre requerirá el consentimiento para el tratamiento de tus datos personales que puede ser para uno o varios fines específicos sobre los que te informará previamente con absoluta transparencia.', '⚫ Principio de minimización de datos: El Titular te solicitará solo los datos estrictamente necesarios para el fin o los fines que los solicita.', '⚫ Principio de limitación del plazo de conservación: Los datos se mantendrán durante el tiempo estrictamente necesario para el fin o los fines del tratamiento. El Titular te informará del plazo de conservación correspondiente según la finalidad.En el caso de suscripciones, el Titular revisará periódicamente las listas y eliminará aquellos registros inactivos durante un tiempo considerable.', '⚫ Principio de integridad y confidencialidad: Tus datos serán tratados de tal manera que su seguridad, confidencialidad e integridad esté garantizada.Debes saber que el Titular toma las precauciones necesarias para evitar el acceso no autorizado o uso indebido de los datos de sus usuarios por parte de terceros.', 'Obtención de datos', 'Obtención de datos', 'Para navegar por JCP_helper no es necesario que facilites ningún dato personal. Los casos en los que sí proporcionas tus datos personales son los siguientes:', '⚫ Al contactar a través de los formularios de contacto o enviar un correo electrónico.', '⚫ Al realizar un comentario en un artículo o página.', '⚫ Al inscribirte en un formulario de suscripción o un boletín que el Titular gestiona con MailChimp.', 'Tus derechos', 'Tus derechos', 'El Titular te informa que sobre tus datos personales tienes derecho a:', '⚫ Solicitar el acceso a los datos almacenados.', '⚫ Solicitar una rectificación o la cancelación.', '⚫ Solicitar la limitación de su tratamiento.', '⚫ Oponerte al tratamiento.', '⚫ Solicitar la portabilidad de tus datos.', 'El ejercicio de estos derechos es personal y por tanto debe ser ejercido directamente por el interesado, solicitándolo directamente al Titular, lo que significa que cualquier cliente, suscriptor o colaborador que haya facilitado sus datos en algún momento puede dirigirse al Titular y pedir información sobre los datos que tiene almacenados y cómo los ha obtenido, solicitar la rectificación de los mismos, solicitar la portabilidad de sus datos personales, oponerse al tratamiento, limitar su uso o solicitar la cancelación de esos datos en los ficheros del Titular.', 'Para ejercitar tus derechos de acceso, rectificación, cancelación, portabilidad y oposición tienes que enviar un correo electrónico a JCP_helper@gmail.com junto con la prueba válida en derecho como una fotocopia del D.N.I. o equivalente.', 'Tienes derecho a la tutela judicial efectiva y a presentar una reclamación ante la autoridad de control, en este caso, la Agencia Española de Protección de Datos, si consideras que el tratamiento de datos personales que te conciernen infringe el Reglamento.', 'Finalidad de tratamiento', 'Finalidad de tratamiento', 'Cuando te conectas al sitio Web para mandar un correo al Titular, te suscribes a su boletín o realizas una contratación, estás facilitando información de carácter personal de la que el responsable es el Titular. Esta información puede incluir datos de carácter personal como pueden ser tu dirección IP, nombre y apellidos, dirección física, dirección de correo electrónico,  número de teléfono, y otra información. Al facilitar esta información, das tu consentimiento para que tu información sea recopilada, utilizada, gestionada y almacenada por superadmin.es , sólo como se describe en el Aviso Legal y en la presente Política de Privacidad.', 'Los datos personales y la finalidad del tratamiento por parte del Titular es diferente según el sistema de captura de información:', '⚫ Formularios de contacto: El Titular solicita datos personales entre los que pueden estar: Nombre y apellidos, dirección de correo electrónico, número de teléfono y dirección de tu sitio Web con la finalidad de responder a tus consultas.', 'Por ejemplo, el Titular utiliza esos datos para dar respuesta a tus mensajes, dudas, quejas, comentarios o inquietudes que puedas tener relativas a la información incluida en el sitio Web, los servicios que se prestan a través del sitio Web, el tratamiento de tus datos personales, cuestiones referentes a los textos legales incluidos en el sitio Web, así como cualquier otra consulta que puedas tener y que no esté sujeta a las condiciones del sitio Web o de la contratación.', 'Existen otras finalidades por las que el Titular trata tus datos personales:', '⚫ Para garantizar el cumplimiento de las condiciones recogidas en el Aviso Legal y en la ley aplicable. Esto puede incluir el desarrollo de herramientas y algoritmos que ayuden a este sitio Web a garantizar la confidencialidad de los datos personales que recoge.', '⚫ Para apoyar y mejorar los servicios que ofrece este sitio Web.', '⚫ Para analizar la navegación. El Titular recoge otros datos no identificativos que se obtienen mediante el uso de cookies que se descargan en tu ordenador cuando navegas por el sitio Web cuyas caracterísiticas y finalidad están detalladas en la Política de Cookies .', '⚫ Para gestionar las redes sociales. el Titular tiene presencia en redes sociales. Si te haces seguidor en las redes sociales del Titular el tratamiento de los datos personales se regirá por este apartado, así como por aquellas condiciones de uso, políticas de privacidad y normativas de acceso que pertenezcan a la red social que proceda en cada caso y que has aceptado previamente.', 'El Titular tratará tus datos personales con la finalidad de administrar correctamente su presencia en la red social, informarte de sus actividades, productos o servicios, así como para cualquier otra finalidad que las normativas de las redes sociales permitan.', 'En ningún caso el Titular utilizará los perfiles de seguidores en redes sociales para enviar publicidad de manera individual.', 'Seguridad de datos', 'Seguridad de datos', 'Para proteger tus datos personales, el Titular toma todas las precauciones razonables y sigue las mejores prácticas de la industria para evitar su pérdida, mal uso, acceso indebido, divulgación, alteración o destrucción de los mismos.', 'El sitio Web está alojado en Heroku. La seguridad de tus datos está garantizada, ya que toman todas las medidas de seguridad necesarias para ello. Puedes consultar su política de privacidad para tener más información.', 'Contenido de otros sitios', 'Contenido de otros sitios', 'Las páginas de este sitio Web pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si hubieras visitado la otra web.', 'Estos sitios Web pueden recopilar datos sobre ti, utilizar cookies, incrustar un código de seguimiento adicional de terceros, y supervisar tu interacción usando este código.', 'Política de cookies', 'Política de cookies', 'Para que este sitio Web funcione correctamente necesita utilizar cookies, que es una información que se almacena en tu navegador web.', 'En la página Política de Cookies puedes consultar toda la información relativa a la política de recogida, la finalidad y el tratamiento de las cookies.', 'Legitimación de tratamiento', 'Legitimación de tratamiento', 'La base legal para el tratamiento de tus datos es: el consentimiento.', 'Para contactar con el Titular, suscribirte a un boletín o realizar comentarios en este sitio Web tienes que aceptar la presente Política de Privacidad.', 'Categorías (datos personales)', 'Categorías (datos personales)', 'Las categorías de datos personales que trata el Titular son:', '⚫ Datos identificativos.', 'Conservación (datos personales)', 'Conservación (datos personales)', 'Los datos personales que proporciones al Titular se conservarán hasta que solicites su supresión.', 'Exactitud de datos', 'Exactitud de datos', 'Te comprometes a que los datos facilitados al Titular sean correctos, completos, exactos y vigentes, así como a mantenerlos debidamente actualizados.', 'Como Usuario del sitio Web eres el único responsable de la veracidad y corrección de los datos que remitas al sitio exonerando a el Titular de cualquier responsabilidad al respecto.', 'Aceptación y consentimiento', 'Aceptación y consentimiento', 'Como Usuario del sitio Web declaras haber sido informado de las condiciones sobre protección de datos de carácter personal, aceptas y consientes el tratamiento de los mismos por parte de el Titular en la forma y para las finalidades indicadas en esta Política de Privacidad.', 'Revocabilidad', 'Revocabilidad', 'Para ejercitar tus derechos de acceso, rectificación, cancelación, portabilidad y oposición tienes que enviar un correo electrónico a JCP_helper@gmail.com junto con la prueba válida en derecho como una fotocopia del D.N.I. o equivalente.', 'El ejercicio de tus derechos no incluye ningún dato que el Titular esté obligado a conservar con fines administrativos, legales o de seguridad.', 'Cambios en la política', 'Cambios en la política', 'El Titular se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria.', 'Estas políticas estarán vigentes hasta que sean modificadas por otras debidamente publicadas.',]
        },
        "textIngles": {
            texts: ['Privacy Policy.', 'Privacy Policy.', 'Privacy Policy.', 'Download', 'Cookies', 'Know more', 'Terms', 'Sections', 'Fundamental', 'Data processing', 'Getting data', 'Your rights', 'Purpose treatment', 'Data security', 'Third party content', 'Cookies policy', 'Legitimation', 'Categories', 'Conservation', 'Data accuracy', 'Consent', 'Revocability', 'Policy changes', 'Download terms', 'Download terms', 'Download', 'Download the terms and conditions, privacy policies, cookies policies and additional information of the project.', 'Fundamental aspects', 'Fundamental aspects', 'JCP_helper informs you about its Privacy Policy regarding the treatment and protection of personal data of users and customers that may be collected by browsing or contracting services through the JCP_helper.com site.', 'In this sense, the Owner guarantees compliance with current regulations on the protection of personal data, reflected in Organic Law 3 / 2018, of December 5, Protection of Personal Data and Guarantee of Digital Rights (LOPD GDD ). It also complies with Regulation (EU) 2016 / 679 of the European Parliament and of the Council of April 27, 2016 regarding the protection of natural persons (GDPR).', 'The use of the website implies acceptance of this Privacy Policy as well as the conditions included in the Legal Notice.', 'Data treatment', 'Data treatment', 'In the processing of your personal data, the Owner will apply the following principles that conform to the requirements of the new European data protection regulation: ', '⚫ Principle of legality, loyalty and transparency: The Holder will always require consent for the processing of your personal data, which may be for one or more specific purposes about which he will inform you in advance with absolute transparency.', '⚫ Principle of data minimization: The Owner will request only the data strictly necessary for the purpose or purposes for which it is requested.', '⚫ Principle of limitation of the conservation period: The data will be kept for the time strictly necessary for the purpose or purposes of the treatment. The Owner will inform you of the corresponding conservation period according to the purpose. In the case of subscriptions, the Owner will periodically review the lists and eliminate those inactive records for a considerable time.', '⚫ Principle of integrity and confidentiality: Your data will be treated in such a way that its security, confidentiality and integrity is guaranteed. You should know that the Owner takes the necessary precautions to avoid unauthorized access or improper use of the data of its users by part of third parties.', 'Data collection', 'Data collection', 'To browse JCP_helper you do not need to provide any personal data. The cases in which you do provide your personal data are the following:', '⚫ By contacting through the contact forms or sending an email.', '⚫ When commenting on an article or page.', '⚫ By signing up for a subscription form or a newsletter that the Owner manages with MailChimp.', 'Your rights', 'Your rights', 'The Owner informs you that regarding your personal data you have the right to:', '⚫ Request access to stored data.', '⚫ Request a rectification or cancellation.', '⚫ Request the limitation of your treatment.', '⚫ Oppose the treatment.', '⚫ Request the portability of your data.', 'The exercise of these rights is personal and therefore must be exercised directly by the interested party, requesting it directly from the Owner, which means that any client, subscriber or collaborator who has provided their data at any time can contact the Owner and request information about the data that you have stored and how you obtained them, request their rectification, request the portability of your personal data, oppose the treatment, limit its use or request the cancellation of sHelp data in the Owners files.', 'To exercise your rights of access, rectification, cancellation, portability and opposition you have to send an email to JCP_helper@gmail.com along with valid proof in law such as a photocopy of the D.N.I. or the equivalent.', 'You have the right to effective judicial protection and to file a claim with the control authority, in this case, the Spanish Agency for Data Protection, if you consider that the processing of personal data that concerns you violates the Regulation.', 'Purpose of treatment', 'Purpose of treatment', 'When you connect to the Website to send an email to the Owner, subscribe to their newsletter or make a contract, you are providing personal information for which the Owner is responsible. This information may include personal data such as your IP address, name and surname, physical address, email address, telephone number, and other information. By providing this information, you give your consent for your information to be collected, used, managed and stored by superadmin.es, only as described in the Legal Notice and in this Privacy Policy.', 'The personal data and the purpose of the treatment by the Holder is different depending on the information capture system:', '⚫ Contact forms: The Holder requests personal data, among which may be: Name and surname, email address, telephone number and address of your website in order to answer your questions.', 'For example, the Owner uses this data to respond to your messages, doubts, complaints, comments or concerns that you may have regarding the information included in the website, the services provided through the website, the treatment of your personal data, questions regarding the legal texts included on the website, as well as any other query you may have that is not subject to the conditions of the website or the contract.', 'There are other purposes for which the Holder processes your personal data:', '⚫ To guarantee compliance with the conditions contained in the Legal Notice and in the applicable law. This may include the development of tools and algorithms that help this website to ensure the confidentiality of the personal data it collects.', '⚫ To support and improve the services offered by this website.', '⚫ To analyze navigation. The Owner collects other non-identifying data that is obtained through the use of cookies that are downloaded to your computer when you browse the website whose characteristics and purpose are detailed in the Cookies Policy.', '⚫ To manage social networks. the Holder has a presence on social networks. If you become a follower on the Owners social networks, the processing of personal data will be governed by this section, as well as by those conditions of use, privacy policies and access regulations that belong to the social network that is appropriate in each case and that you have previously accepted.', 'The Owner will process your personal data in order to correctly manage its presence on the social network, inform you of its activities, products or services, as well as for any other purpose that the regulations of social networks allow.', 'In no case will the Holder use the profiles of followers on social networks to send advertising individually.', 'Data security', 'Data security', 'To protect your personal data, the Holder takes all reasonable precautions and follows the best industry practices to prevent its loss, misuse, improper access, disclosure, alteration or destruction of the same.', 'The website is hosted on Heroku. The security of your data is guaranteed, since they take all the necessary security measures for it. You can check their privacy policy for more information.', 'Content from other sites', 'Content from other sites', 'The pages of this website may include embedded content (for example, videos, images, articles, etc.). Embedded content from other websites behaves in exactly the same way as if you had visited the other website.', 'These websites may collect data about you, use cookies, embed additional third-party tracking code, and monitor your interaction using this code.', 'Cookies policy', 'Cookies policy', 'What is it for? For the website to function correctly, you need to use cookies, which is information that is stored in your web browser.', 'On the Cookies Policy page you can consult all the information related to the collection policy, the purpose and the treatment of cookies.', 'Legitimation of treatment', 'Legitimation of treatment', 'The legal basis for the processing of your data is: consent.', 'To contact the Owner, subscribe to a newsletter or make comments on this website you have to accept this Privacy Policy.', 'Categories (personal data)', 'Categories (personal data)', 'The categories of personal data processed by the Holder are:', '⚫ Identification data.', 'Preservation (personal data)', 'Preservation (personal data)', 'The personal data that you provide to the Owner will be kept until you request its deletion.', 'Data accuracy', 'Data accuracy', 'You agree that the data provided to the Owner is correct, complete, exact and current, as well as to keep them duly updated.', 'As a User of the Website, you are solely responsible for the veracity and correctness of the data that you send to the site, exonerating the Owner of any responsibility in this regard.', 'Acceptance and consent', 'Acceptance and consent', 'As a User of the Website, you declare that you have been informed of the conditions on the protection of personal data, you accept and consent to the treatment thereof by the Owner in the manner and for the purposes indicated in this Privacy Policy.', 'Revocability', 'Revocability', 'To exercise your rights of access, rectification, cancellation, portability and opposition you have to send an email to JCP_helper@gmail.com along with valid proof in law such as a photocopy of the D.N.I. or the equivalent.', 'The exercise of your rights does not include any data that the Owner is obliged to keep for administrative, legal or security purposes.', 'Changes in policy', 'Changes in policy', 'The Owner reserves the right to modify this Privacy Policy to adapt it to new legislation or jurisprudence, as well as industry practices.', 'These policies will be in force until they are modified by others duly published.',]
        },
        "textPortugues": {
            texts: ['Política de privacidade.', 'Política de privacidade.', 'Política de privacidade.', 'Descarga', 'Cookies', 'Saber mais', 'Termos', 'Seções', 'Fundamental', 'Processamento de dados', 'Obtendo dados', 'Seus direitos', 'Propósito de tratamento', 'Segurança de dados', 'Conteúdo de terceiros', 'Política de cookies', 'Legitimação', 'Categorias', 'Conservação', 'Precisão de dados', 'Consentimento', 'Revogabilidade', 'Mudanças de política', 'Termos de download', 'Termos de download', 'Descarga', 'Baixe os termos e condições, políticas de privacidade, políticas de cookies e informações adicionais do projeto.', 'Aspectos fundamentais', 'Aspectos fundamentais', 'JCP_helper informa sobre a sua Política de Privacidade relativa ao tratamento e protecção dos dados pessoais dos utilizadores e clientes que possam ser recolhidos pela navegação ou contratação de serviços através do site JCP_helper.com.', 'Neste sentido, o Titular garante o cumprimento da normativa vigente sobre proteção de dados pessoais, refletida na Lei Orgânica 3/2018, de 5 de dezembro, Proteção de Dados Pessoais e Garantia de Direitos Digitais (LOPD GDD). Também está em conformidade com o Regulamento (UE) 2016/679 do Parlamento Europeu e do Conselho de 27 de abril de 2016 sobre a proteção de pessoas físicas (GDPR).', 'O uso do site implica a aceitação desta Política de Privacidade, bem como as condições incluídas no Aviso Legal.', 'Tratamento de dados', 'Tratamento de dados', 'No processamento de seus dados pessoais, o Proprietário aplicará os seguintes princípios que estão em conformidade com os requisitos do novo regulamento europeu de proteção de dados: ', '⚫ Princípio da legalidade, lealdade e transparência: O Titular exigirá sempre o consentimento para o tratamento dos seus dados pessoais, que poderão ser para uma ou mais finalidades específicas sobre as quais o informará previamente com absoluta transparência.', '⚫ Princípio da minimização de dados: O Titular solicitará apenas os dados estritamente necessários para a finalidade ou finalidades para as quais são solicitados.', '⚫ Princípio da limitação do prazo de conservação: Os dados serão conservados pelo tempo estritamente necessário à finalidade ou finalidades do tratamento. O Titular informará sobre o período de conservação correspondente de acordo com a finalidade. No caso de assinaturas, o Titular revisará periodicamente as listas e eliminará os registros inativos por um tempo considerável.', '⚫ Princípio da integridade e confidencialidade: Os seus dados serão tratados de forma a garantir a sua segurança, confidencialidade e integridade. Deve saber que o Titular toma as precauções necessárias para evitar o acesso não autorizado ou uso indevido dos dados dos seus utilizadores por parte de terceiros.', 'Coleção de dados', 'Coleção de dados', 'Para navegar no JCP_helper não é necessário fornecer nenhum dado pessoal. Os casos em que você fornece seus dados pessoais são os seguintes:', '⚫ Entrando em contato através dos formulários de contato ou enviando um e-mail.', '⚫ Ao comentar um artigo ou página.', '⚫ Ao se inscrever em um formulário de assinatura ou newsletter que o Proprietário gerencia com o MailChimp.', 'Seus direitos', 'Seus direitos', 'O Titular informa-o que relativamente aos seus dados pessoais tem o direito de:', '⚫ Solicitar acesso aos dados armazenados.', '⚫ Solicitar uma retificação ou cancelamento.', '⚫ Solicite a limitação do seu tratamento.', '⚫ Oponha-se ao tratamento.', '⚫ Solicite a portabilidade dos seus dados.', 'O exercício destes direitos é pessoal e, portanto, deve ser exercido diretamente pelo interessado, solicitando-o diretamente ao Titular, o que significa que qualquer cliente, assinante ou colaborador que tenha fornecido seus dados a qualquer momento pode entrar em contato com o Titular e solicitar informações sobre os dados que guardou e como os obteve, solicitar a sua retificação, solicitar a portabilidade dos seus dados pessoais, opor-se ao tratamento, limitar a sua utilização ou solicitar o cancelamento dos referidos dados no Arquivos do proprietário.', 'Para exercer os seus direitos de acesso, rectificação, cancelamento, portabilidade e oposição deverá enviar um e-mail para JCP_helper@gmail.com juntamente com um comprovativo legal válido como a fotocópia do D.N.I. ou o equivalente.', 'Tem direito a uma tutela jurisdicional efectiva e a apresentar uma reclamação junto da autoridade de controlo, neste caso, a Agência Espanhola de Protecção de Dados, se considerar que o tratamento dos dados pessoais que lhe digam respeito viola o Regulamento.', 'Objetivo do tratamento', 'Objetivo do tratamento', 'Quando você se conecta ao Site para enviar um e-mail ao Proprietário, assinar seu boletim informativo ou fazer um contrato, você está fornecendo informações pessoais pelas quais o Proprietário é responsável. Essas informações podem incluir dados pessoais, como seu endereço IP, nome e sobrenome, endereço físico, endereço de e-mail, número de telefone e outras informações. Ao fornecer essas informações, você dá seu consentimento para que suas informações sejam coletadas, usadas, gerenciadas e armazenadas por superadmin.es, apenas conforme descrito no Aviso Legal e nesta Política de Privacidade.', 'Os dados pessoais e a finalidade do tratamento por parte do Titular são diferentes consoante o sistema de recolha de informação:', '⚫ Formulários de contato: O Titular solicita dados pessoais, entre os quais podem ser: Nome e sobrenome, endereço de e-mail, número de telefone e endereço do seu site para responder às suas perguntas.', 'Por exemplo, o Proprietário utiliza estes dados para responder às suas mensagens, dúvidas, reclamações, comentários ou preocupações que possa ter sobre a informação incluída no site, os serviços prestados através do site, o tratamento dos seus dados pessoais, perguntas sobre os textos legais incluídos no site, bem como qualquer outra consulta que você possa ter que não esteja sujeita às condições do site ou do contrato.', 'Existem outras finalidades para as quais o Titular trata os seus dados pessoais:', '⚫ Para garantir o cumprimento das condições contidas no Aviso Legal e na legislação aplicável. Isso pode incluir o desenvolvimento de ferramentas e algoritmos que ajudem este site a garantir a confidencialidade dos dados pessoais coletados.', '⚫ Para apoiar e melhorar os serviços oferecidos por este site.', '⚫ Para analisar a navegação. O Proprietário recolhe outros dados não identificativos que são obtidos através da utilização de cookies que são descarregados no seu computador quando navega no website cujas características e finalidade estão detalhadas na Política de Cookies.', '⚫ Gerir redes sociais. o Titular tem presença nas redes sociais. Se você se tornar um seguidor nas redes sociais do Titular, o processamento de dados pessoais será regido por esta seção, bem como pelas condições de uso, políticas de privacidade e regulamentos de acesso pertencentes à rede social que são apropriados em cada caso e que você aceitou anteriormente.', 'O Proprietário tratará os seus dados pessoais com a finalidade de gerir correctamente a sua presença na rede social, informá-lo das suas actividades, produtos ou serviços, bem como para qualquer outra finalidade que a regulamentação das redes sociais o permita.', 'Em hipótese alguma o Titular utilizará os perfis dos seguidores nas redes sociais para envio de publicidade individualmente.', 'Segurança de dados', 'Segurança de dados', 'Para proteger os seus dados pessoais, o Titular toma todas as precauções razoáveis ​​e segue as melhores práticas da indústria para evitar a sua perda, uso indevido, acesso indevido, divulgação, alteração ou destruição dos mesmos.', 'O site está hospedado no Heroku. A segurança dos seus dados é garantida, uma vez que tomam todas as medidas de segurança necessárias para os mesmos. Você pode verificar a política de privacidade deles para obter mais informações.', 'Conteúdo de outros sites', 'Conteúdo de outros sites', 'As páginas deste site podem incluir conteúdo incorporado (por exemplo, vídeos, imagens, artigos, etc.). O conteúdo incorporado de outros sites se comporta exatamente da mesma maneira como se você tivesse visitado o outro site.', 'Esses sites podem coletar dados sobre você, usar cookies, incorporar código de rastreamento adicional de terceiros e monitorar sua interação usando esse código.', 'Política de cookies', 'Política de cookies', 'Para que serve Para que o site funcione corretamente, você precisa usar cookies, que são informações armazenadas em seu navegador da web.', 'Na página da Política de Cookies pode consultar toda a informação relacionada com a política de recolha, a finalidade e o tratamento dos cookies.', 'Legitimação do tratamento', 'Legitimação do tratamento', 'A base legal para o tratamento dos seus dados é: consentimento.', 'Para entrar em contato com o Proprietário, assinar um boletim informativo ou fazer comentários neste site, você deve aceitar esta Política de Privacidade.', 'Categorias (dados pessoais)', 'Categorias (dados pessoais)', 'As categorias de dados pessoais tratados pelo Titular são:', '⚫ Dados de identificação.', 'Preservação (dados pessoais)', 'Preservação (dados pessoais)', 'Os dados pessoais que você fornecer ao Proprietário serão mantidos até que você solicite sua exclusão.', 'Precisão de dados', 'Precisão de dados', 'Você concorda que os dados fornecidos ao Titular são corretos, completos, exatos e atuais, bem como mantê-los devidamente atualizados.', 'Como Usuário do Site, você é o único responsável pela veracidade e exatidão dos dados que enviar ao site, exonerando o Titular de qualquer responsabilidade a esse respeito.', 'Aceitação e consentimento', 'Aceitação e consentimento', 'Como Utilizador do Site, declara ter sido informado das condições de protecção de dados pessoais, aceita e consente o seu tratamento pelo Titular na forma e para os fins indicados nesta Política de Privacidade.', 'Revogabilidade', 'Revogabilidade', 'Para exercer os seus direitos de acesso, rectificação, cancelamento, portabilidade e oposição deverá enviar um e-mail para JCP_helper@gmail.com juntamente com um comprovativo legal válido como a fotocópia do D.N.I. ou o equivalente.', 'O exercício dos seus direitos não inclui quaisquer dados que o Proprietário seja obrigado a manter para fins administrativos, legais ou de segurança.', 'Mudanças na política', 'Mudanças na política', 'O Proprietário reserva-se o direito de modificar esta Política de Privacidade para adaptá-la à nova legislação ou jurisprudência, bem como às práticas da indústria.', 'Estas políticas estarão em vigor até que sejam modificadas por outras devidamente publicadas.',]
        },
        "textChino": {
            texts: ['隐私政策。', '隐私政策。', '隐私政策。', '释放', '饼干', '了解更多', '条款', '节', '基本的', '数据处理', '获取数据', '你的权利', '目的治疗', '数据安全', '第三方内容', '饼干政策', '合法化', '类别', '保护', '数据准确性', '同意', "可撤销性", '政策变化', '下载条款', '下载条款', '释放', '下载项目的条款和条件、隐私政策、cookies政策和附加信息。', '基本方面', '基本方面', 'JCP_helper 告知您其关于处理和保护用户和客户个人数据的隐私政策,这些数据可能通过浏览或通过 JCP_helper.com 网站签订服务合同收集。', '从这个意义上说,所有者保证遵守现行的个人数据保护法规,反映在 12 月 5 日第 3 / 2018 号组织法,个人数据保护和数字权利保障 (LOPD GDD)。它还符合欧洲议会和理事会 2016 年 4 月 27 日关于保护自然人 (GDPR) 的条例 (EU) 2016 / 679。', "使用本网站意味着接受本隐私政策以及法律声明中包含的条件。", '数据处理', '数据处理', '在处理您的个人数据时,所有者将应用以下符合新欧洲数据保护法规要求的原则:', '⚫ 合法性、忠诚度和透明度的原则:持有人将始终要求同意处理您的个人数据,这可能是为了一个或多个特定目的,他将以绝对透明的方式提前通知您。', '⚫ 数据最小化原则:所有者将仅请求为所请求的一个或多个目的绝对必要的数据。', '⚫ 保存期限的限制原则:数据将在治疗目的或目的严格必要的时间内保存。所有者会根据目的告知您相应的保存期限。在订阅的情况下,所有者将定期审查列表并删除那些在相当长的时间内不活跃的记录。', '⚫ 完整性和机密性原则:您的数据将以其安全性、机密性和完整性得到保证的方式处理。您应该知道所有者采取了必要的预防措施,以避免未经授权访问或不当使用其用户的数据由第三方的一部分。', '数据采集', '数据采集', '要浏览 JCP_helper,您不需要提供任何个人数据。您提供个人数据的情况如下:', '⚫ 通过联系表格联系或发送电子邮件。', '⚫ 评论文章或页面时。', '⚫ 通过注册所有者使用 MailChimp 管理的订阅表格或时事通讯。', '你的权利', '你的权利', '所有者通知您,关于您的个人数据,您有权:', '⚫ 请求访问存储的数据。', '⚫ 要求更正或取消。', '⚫ 请求限制您的治疗。', '⚫ 反对治疗。', '⚫ 请求数据的可移植性。', "作为本网站的用户,您声明您已被告知有关个人数据保护的条件,您接受并同意所有者以本隐私政策中指明的方式和目的对其进行处理。", "作为本网站的用户,您声明您已被告知有关个人数据保护的条件,您接受并同意所有者以本隐私政策中指明的方式和目的对其进行处理。", "如果您认为与您有关的个人数据的处理违反了该规定,您有权获得有效的司法保护并向控制机构提出索赔,在本例中为西班牙数据保护机构。", '治疗目的', '治疗目的', '当您连接到网站向所有者发送电子邮件、订阅他们的时事通讯或签订合同时,您正在提供所有者负责的个人信息。此信息可能包括个人数据,例如您的 IP 地址、姓名、实际地址、电子邮件地址、电话号码和其他信息。通过提供此信息,您同意 superadmin.es 仅按照法律声明和本隐私政策中的描述收集、使用、管理和存储您的信息。', '持有人的个人数据和处理目的因信息采集系统而异:', '⚫ 联系表格:持有人要求提供个人数据,其中可能包括:姓名、电子邮件地址、电话号码和您网站的地址,以便回答您的​​问题。', '例如,所有者使用这些数据来回应您可能对网站中包含的信息、通过网站提供的服务、您的个人数据的处理、关于网站上包含的法律文本,以及您可能有的不受网站或合同条件约束的任何其他查询。', '持有人处理您的个人数据还有其他目的:', '⚫ 保证遵守法律声明和适用法律中包含的条件。这可能包括开发工具和算法,帮助本网站确保其收集的个人数据的机密性。', '⚫ 支持和改进本网站提供的服务。', '⚫ 分析导航。所有者收集其他非识别数据,这些数据是通过使用 cookie 获得的,这些 cookie 在您浏览网站时下载到您的计算机,其特征和目的在 Cookie 政策中有详细说明。', '⚫ 管理社交网络。持有人出现在社交网络上。如果您成为所有者社交网络的关注者,则个人数据的处理将受本节以及适用于每种情况的社交网络的使用条件、隐私政策和访问规定的约束,并且您之前已经接受。', "所有者将处理您的个人数据,以便正确管理其在社交网络上的存在,通知您其活动、产品或服务,以及社交网络法规允许的任何其他目的。", "在任何情况下,持有人都不会使用社交网络上关注者的个人资料来单独发送广告。", '数据安全', '数据安全', "为保护您的个人数据,持有人采取一切合理的预防措施并遵循最佳行业惯例,以防止其丢失、滥用、不当访问、披露、更改或破坏。", '该网站托管在 Heroku 上。您的数据的安全性是有保证的,因为他们采取了所有必要的安全措施。您可以查看他们的隐私政策以获取更多信息。', '来自其他网站的内容', '来自其他网站的内容', '本网站的页面可能包含嵌入内容（例如,视频、图像、文章等）。来自其他网站的嵌入内容的行为方式与您访问过其他网站的方式完全相同。', '这些网站可能会收集关于您的数据、使用 cookie、嵌入额外的第三方跟踪代码,并使用此代码监控您的互动。', '饼干政策', '饼干政策', '它是做什么用的?为了使网站正常运行,您需要使用 cookie,这是存储在您的网络浏览器中的信息。', '在 Cookie 政策页面上,您可以查阅与收集政策、目的和 cookie 处理相关的所有信息。', "治疗合法化", "治疗合法化", '处理您的数据的法律依据是:同意。', '要联系所有者、订阅时事通讯或在本网站上发表评论,您必须接受本隐私政策。', '类别（个人数据）', '类别（个人数据）', '持有人处理的个人数据类别是:', '⚫ 识别数据。', '保存（个人数据）', '保存（个人数据）', '您提供给所有者的个人数据将被保留,直到您要求删除为止。', '数据准确性', '数据准确性', '您同意提供给所有者的数据是正确、完整、准确和最新的,并及时更新。', "作为本网站的用户,您对发送到本网站的数据的真实性和正确性负全部责任,免除所有者在这方面的任何责任。", '接受和同意', '接受和同意', "作为本网站的用户,您声明您已被告知有关个人数据保护的条件,您接受并同意所有者以本隐私政策中指明的方式和目的对其进行处理。", "可撤销性", "可撤销性", "作为本网站的用户,您声明您已被告知有关个人数据保护的条件,您接受并同意所有者以本隐私政策中指明的方式和目的对其进行处理。", "行使您的权利不包括所有者出于行政、法律或安全目的而必须保留的任何数据。", '政策的变化', '政策的变化', '所有者保留修改本隐私政策以使其适应新的立法或判例以及行业惯例的权利。', '这些政策将一直有效,直到它们被其他人修改并正式发布。',]
        }
    },
    "politica_cookies": {
        "textEspanol": {
            texts: ['Política cookies.', 'Política cookies.', 'Política cookies.', 'Descargar', 'Privacidad', 'Saber más', 'Términos', 'Secciones', '¿Qué son?', 'Tipos', 'Desactivación', 'Declaración', 'Final', 'Descargar términos', 'Descargar términos', 'Descargar', 'Descague los términos y condiciones, políticas de privacidad, políticas de cookies e información adcional del proyecto.', '¿Qué son las cookies?', '¿Qué son las cookies?', ' Las cookies son archivos que se pueden descargar en su equipo a través de las páginas web. Son herramientas que tienen un papel esencial para la prestación de numerosos servicios de la sociedad de la información. Entre otros, permiten a una página web almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información obtenida, se pueden utilizar para reconocer al usuario y mejorar el servicio ofrecido.', 'Tipos de cookies', 'Tipos de cookies', 'Según quien sea la entidad que gestione el dominio desde donde se envían las cookies y trate los datos que se obtengan se pueden distinguir dos tipos:', '⚫ Cookies propias: aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario. ⚫ Cookies de terceros: aquéllas que se envían al equipo terminal del usuariodesde un equipo o dominio que no es gestionado por el editor, sino por otraentidad que trata los datos obtenidos través de las cookies.', 'En el caso de que las cookies sean instaladas desde un equipo o dominio gestionadopor el propio editor pero la información que se recoja mediante éstas sea gestionadapor un tercero, no pueden ser consideradas como cookies propias.', ' Existe también una segunda clasificación según el plazo de tiempo que permanecen almacenadas en el navegador del cliente, pudiendo tratarse de: ⚫ Cookies de sesión: diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión (p.e. una lista de productos adquiridos)', ' ⚫ Cookies persistentes: los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.  Por último, existe otra clasificación según la finalidad para la que se traten los datos obtenidos: ⚫ Cookies técnicas: aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de vídeos o sonido o compartir contenidos a través de redes sociales. ⚫ Cookies de personalización: permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc. ⚫ Cookies de análisis: permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.', ' ⚫ Cookies publicitarias: permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios. ⚫ Cookies de publicidad comportamental: almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo. ⚫ Cookies de redes sociales externas: se utilizan para que los visitantes puedan interactuar con el contenido de diferentes plataformas sociales (facebook, youtube, twitter, linkedIn, etc.) y que se generen únicamente para los usuarios de dichas redes sociales. Las condiciones de utilización de estas cookies y la información recopilada se regula por la política de privacidad de la plataforma social correspondiente.', 'Desactivación de cookies', 'Desactivación de cookies', ' Tienes la opción de permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en su equipo. Al desactivar cookies, algunos de los servicios disponibles podrían dejar de estar operativos.', 'La forma de deshabilitar las cookies es diferente para cada navegador, peronormalmente puede hacerse desde el menú Herramientas u Opciones. También puedeconsultarse el menú de Ayuda del navegador dónde puedes encontrar instrucciones. Elusuario podrá en cualquier momento elegir qué cookies quiere que funcionen en estesitio web. Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:        ', '*Nota: El funcionamiento de los enlaces depende del proveedor del servicio. ', 'Declaración de cookies', 'Declaración de cookies', ' Puede consultar las cookies empleadas en el documento y documentación de este proyecto de código abierto.', ' Para acceder presione la siguiente liga que lo llevara a la documentación oficial y al código del proyecto.', 'Acceso a documentación oficial.', 'Aceptación de politica.', 'Aceptación de politica.', ' JCP_helper asume que usted acepta el uso de cookies. No obstante, muestra información sobre su Política de cookies en la parte inferior o superior de cualquier página del portal con cada inicio de sesión con el objeto de que usted sea consciente Ante esta información es posible llevar a cabo las siguientes acciones:', ' ⚫ Aceptar cookies. No se volverá a visualizar este aviso al acceder a cualquier página del portal durante la presente sesión. ⚫ Cerrar. Se oculta el aviso en la presente página.']
        },
        "textIngles": {
            texts: ['Cookies policy.', 'Cookies policy.', 'Cookies policy.', 'Download', 'Privacy', 'Know more', 'Terms', 'Sections', 'What are they?', 'Types', 'Deactivation', 'Declaration', 'Final', 'Download terms', 'Download terms', 'Download', 'Download the terms and conditions, privacy policies, cookies policies and additional information of the project.', '¿ What are cookies?', 'What are cookies?', ' Cookies are files that can be downloaded to your computer through web pages. They are tools that play an essential role in the provision of numerous information society services. Among others, they allow a web page to store and retrieve information about the browsing habits of a user or their equipment and, depending on the information obtained, they can be used to recognize the user and improve the service offered.', 'Types of cookies', 'Types of cookies', 'Depending on who is the entity that manages the domain from which cookies are sent and processes the data obtained, two types can be distinguished: ⚫ Own cookies: those that are sent to the users terminal equipment from a computer or domain managed by the editor itself and from which the service requested by the user is provided. ⚫ Third-party cookies: those that are sent to the users terminal equipment from a computer or domain that does not is managed by the editor, but by another entity that processes the data obtained through cookies.', 'In the event that cookies are installed from a computer or domain managed by the editor itself, but the information that is collected m Since these are managed by a third party, they cannot be considered as own cookies.', ' There is also a second classification according to the period of time that they remain stored in the clients browser, which may be: ⚫ Session cookies: designed to collect and store data while the user accesses a web page. They are usually used to store information that is only interested in keeping for the provision of the service requested by the user on a single occasion (eg a list of products purchased)', ' ⚫ Persistent cookies: the data is still stored in the terminal and can be accessed and processed during a period defined by the person responsible for the cookie, and which can range from a few minutes to several years.', ' Finally, there is another classification according to the purpose for which the data obtained is processed: ⚫ Technical cookies : those that allow the user to navigate through a web page, platform or application and the use of the different options or services that exist in it, such as, for example, controlling traffic and data communication, identifying the session, accessing to parts of restricted access, remember the elements that make up an order, carry out the purchase process of an order, make the application for registration or participation in an event, use r security elements during browsing, store content for the dissemination of videos or sound or share content through social networks. ⚫ Personalization cookies: allow the user to access the service with some predefined general characteristics based on a series of criteria in the user terminal, such as the language, the type of browser through which you access the service, the regional configuration from where you access the service, etc.', ' ⚫ Analysis cookies: they allow the person in charge of the same, the monitoring and analysis of the behavior of the users of the websites to which they are linked. The information collected through this type of cookies is used to measure the activity of websites, applications or platforms and to create browsing profiles for users of sHelp sites, applications and platforms, in order to introduce improvements in function of the analysis of the use data made by the users of the service. ⚫ Advertising cookies: they allow the management, in the most efficient way possible, of the advertising spaces. ⚫ Behavioral advertising cookies: they store information about the User behavior obtained through continuous observation of their browsing habits, which allows the development of a specific profile to display advertising based on it.', ' ⚫ External social network cookies: they are used so that visitors can interact with the content of different social platforms (facebook, youtube, twitter, linkedIn, etc.) and that are generated only for the users of sHelp networks social. The conditions of use of these cookies and the information collected is regulated by the privacy policy of the corresponding social platform.', 'Cookie deactivation', 'Cookie deactivation', ' You have the option to allow, block or delete cookies installed on your computer by configuring the options It is from the browser installed on your computer. By disabling cookies, some of the available services could stop being operational.', 'The way to disable cookies is different for each browser, but normally it can be done from the Tools or Options menu. You can also consult the browsers Help menu where you can find instructions. The user may at any time choose which cookies he wants to work on this website. You can allow, block or delete the cookies installed on your computer by configuring the options of the browser installed on your computer: ', '*Note: The operation of the links depends on the service provider. ', 'Declaration of cookies', 'Declaration of cookies', ' You can consult the cookies used in the document and documentation of this open source project.', ' To access press the following link that will take you to the official documentation and the project code.', 'Access to official documentation.', 'Acceptance of policy.', 'Acceptance of policy.', ' JCP_helper assumes that you accept the use of cookies. However, it displays information about its Cookies Policy at the bottom or top of any page of the portal with each login in order for you to be aware of this information, it is possible to carry out the following actions:', ' ⚫ Accept cookies. This notice will not be displayed again when accessing any page of the portal during this session. ⚫ Close. The notice is hidden on this page.']
        },
        "textPortugues": {
            texts: ['Política de cookies.', 'Política de cookies.', 'Política de cookies.', 'Download', 'Privacidade', 'Saiba mais', 'Termos', 'Seções', 'O que são?', 'Tipos', 'Desativação', 'Declaração', 'Final', 'Termos de download', 'Termos de download', 'Baixar', 'Fazer download dos termos e condições, políticas de privacidade, políticas de cookies e informações adicionais do projeto.', '¿ O que são cookies?', 'O que são cookies?', ' Cookies são arquivos que podem ser baixados para o seu computador através de páginas da web. São ferramentas que desempenham um papel essencial na prestação de inúmeros serviços da sociedade da informação. Entre outros, permitem que uma página web armazene e recupere informação sobre os hábitos de navegação de um utilizador ou do seu equipamento e, dependendo da informação obtida, podem ser utilizados para reconhecer o utilizador e melhorar o serviço oferecido.', 'Tipos de serviços cookies', 'Tipos de cookies', 'Dependendo de quem é a entidade que gere o domínio a partir do qual os cookies são enviados e trata os dados obtidos, podem distinguir-se dois tipos: ⚫ Cookies próprios: os que são enviados para o equipamento terminal do usuário a partir de um computador ou domínio administrado pelo próprio editor e a partir do qual se presta o serviço solicitado pelo usuário. Cookies de terceiros: aqueles que são enviados ao equipamento terminal do usuário a partir de um computador ou domínio que não não é gerido pelo editor, mas por outra entidade que processa os dados obtidos através dos cookies.', 'Caso os cookies sejam instalados a partir de um computador ou domínio gerido pelo próprio editor, mas a informação que é recolhida m Uma vez que são geridos por terceiros, não podem ser considerados como cookies próprios.', ' Existe ainda uma segunda classificação consoante o período de tempo que permanecem armazenados no navegador do cliente, que pode ser: ⚫ Sessão cookies: concebidos para recolher e armazenar dados enquanto o utilizador acede a uma página web. Costumam ser utilizados para armazenar informação que só interessa guardar para a prestação do serviço solicitado pelo utilizador numa única ocasião (ex: lista de produtos adquiridos) ⚫ Cookies persistentes: os dados continuam armazenados no terminal e podem ser acedidos e tratados durante um período definido pelo responsável pelo cookie, podendo ir desde alguns minutos até vários anos.', ' Finalmente, existe outra classificação segundo a finalidade para a qual os dados obtidos são tratados : ⚫ Cookies técnicos: são os que permitem ao utilizador a navegação através de uma página web, plataforma ou aplicação e a utilização das diferentes opções ou serviços nela existentes, como, por exemplo, o controlo do tráfego e a comunicação de dados, identificando da sessão, aceder a partes de acesso restrito, recordar os elementos que compõem uma encomenda, efetuar o processo de compra de uma encomenda, efetuar o pedido de inscrição ou participação num evento, utilizar r elementos de segurança durante a navegação, armazenar conteúdos para a divulgação de vídeos ou som ou partilhar conteúdos através das redes sociais.', ' ⚫ Cookies de personalização: permitem ao utilizador aceder ao serviço com algumas características gerais pré-definidas com base numa série de critérios no utilizador terminal, como o idioma, o tipo de navegador através do qual acede ao serviço, a configuração regional desde onde acede ao serviço, etc. ⚫ Cookies de análise: permitem ao responsável do mesmo, a monitorização e análise do comportamento dos usuários dos sites aos quais estão vinculados. A informação recolhida através deste tipo de cookies é utilizada para medir a atividade de sites, aplicações ou plataformas e para criar perfis de navegação dos utilizadores dos referidos sites, aplicações e plataformas, com o objetivo de introduzir melhorias em função da análise dos dados de utilização efetuados pelos utilizadores do serviço. ⚫ Cookies de publicidade: permitem a gestão, da forma mais eficiente possível, dos espaços publicitários. ⚫ Cookies de publicidade comportamental: armazenam informação sobre o comportamento do Utilizador obtida através da observação contínua de seus hábitos de navegação, o que permite o desenvolvimento de um perfil específico para exibir publicidade baseada nele.', ' ⚫ Cookies de redes sociais externas: são usados ​​para que os visitantes possam interagir com o conteúdo de diferentes plataformas sociais (facebook, youtube, twitter , linkedIn, etc.) e que são gerados apenas para os usuários dessas redes social. As condições de uso desses cookies e as informações coletadas são reguladas pela política de privacidade da plataforma social correspondente.', 'Desativação de cookies', 'Desativação de cookies', ' Você tem a opção de permitir, bloquear ou excluir os cookies instalados em seu computador configurando as opções É do navegador instalado no seu computador. Ao desativar os cookies, alguns dos serviços disponíveis podem deixar de funcionar.', 'A forma de desativar os cookies é diferente para cada navegador, mas normalmente pode ser feita no menu Ferramentas ou Opções. Você também pode consultar o menu Ajuda do navegador, onde encontrará instruções. O usuário pode, a qualquer momento, escolher quais cookies deseja que funcionem neste site. Você pode permitir, bloquear ou eliminar os cookies instalados em seu computador configurando as opções do navegador instalado em seu computador: ', '*Nota: O funcionamento dos links depende do provedor de serviços. ', 'Declaração de cookies', 'Declaração de cookies', ' Você pode consultar os cookies utilizados no documento e documentação deste projeto de código aberto.', ' Para acessar, clique no link a seguir que o levará ao site oficial documentação e o código do projeto.', 'Acesso à documentação oficial.', 'Aceitação da política.', 'Aceitação da política.', ' JCP_helper assume que você aceita o uso de cookies. No entanto, exibe informações sobre sua Política de Cookies na parte inferior ou superior de qualquer página do portal a cada login para que você tenha conhecimento dessas informações, é possível realizar as seguintes ações:', ' ⚫ Aceitar cookies . Este aviso não será exibido novamente ao acessar qualquer página do portal durante esta sessão. ⚫ Fechar. O aviso está oculto nesta página.']
        },
        "textChino": {
            texts: ['Cookies 政策。', 'Cookies 政策。', 'Cookies 政策。', '下载', '隐私', '了解更多', '条款', '部分', '它们是什么?', '类型', '隐私', '停用', '最终', '下载条款', '下载条款', '下载', '下载项目的条款和条件、隐私政策、cookies政策和附加信息。', '¿什么是 cookie?', '什么是 cookie?', ' Cookie 是可以通过网页下载到您计算机上的文件。它们是在提供众多信息社会服务方面发挥重要作用的工具。其中,它们允许网页存储和检索有关用户或其设备的浏览习惯的信息,并且根据获得的信息,它们可用于识别用户并改进所提供的服务。', '类型cookies', 'Cookies 类型', '根据谁是管理发送 cookies 的域并处理所获得数据的实体,可以区分两种类型:', ' ⚫ 自己的 cookies:那些发送到从编辑者自己管理的计算机或域中提供用户请求的服务的用户终端设备。⚫ 第三方 cookie:从计算机或域发送到用户终端设备的那些不是由编辑者管理,而是由处理通过 cookie 获得的数据的另一个实体管理。', '如果从编辑者自己管理的计算机或域安装 cookie,但收集的信息 m由于这些是由第三方管理的,因此它们不能被视为自己的 cookie。', ' 根据它们在客户端浏览器中保留的时间段,还有第二种分类,可能是: ⚫ Session cookies:旨在在用户访问网页时收集和存储数据。它们通常用于存储仅对提供用户一次性请求的服务感兴趣的信息（例如购买的产品列表） ⚫ 持久性 cookie:数据仍然存储在终端中并且可以在负责 cookie 的人定义的期间内访问和处理,范围从几分钟到几年不等。', ' 最后,根据处理所获得数据的目的,还有另一种分类:⚫ 技术 cookie:允许用户浏览网页、平台或应用程序以及使用其中存在的不同选项或服务的 cookie,例如控制流量和数据通信、识别会话,访问受限访问的部分,记住构成订单的元素,执行订单的购买过程,申请注册或参加活动,使用r 浏览期间的安全元素,存储用于传播视频或声音的内容或通过社交网络共享内容。', '终端,例如语言、您访问服务所使用的浏览器类型、您访问服务的区域配置等 ⚫ 分析 cookie:它们允许负责人进行监控分析所链接网站的用户行为。通过此类 cookie 收集的信息用于衡量网站、应用程序或平台的活动,并为所述网站、应用程序和平台的用户创建浏览配置文件,以改进对使用数据的分析功能由服务的用户提供。 ⚫ 广告 cookie:它们允许以最有效的方式管理广告空间。', ' ⚫ 行为广告 cookie:它们存储通过持续观察获得的有关用户行为的信息他们的浏览习惯,这允许开发特定的配置文件以显示基于它的广告。⚫ 外部社交网络 cookie:它们用于使访问者可以与不同社交平台（facebook、youtube、twitter）的内容互动, linkedIn, 等）并且仅为所述网络的用户生成 社会的。这些 cookie 的使用条件和收集的信息受相应社交平台的隐私政策的约束。', 'Cookie deactivation', 'Cookie deactivation', '您可以选择允许、阻止或删除安装在您的网站上的 cookie计算机通过配置选项它来自您计算机上安装的浏览器。通过禁用 cookie,某些可用服务可能会停止运行。', '禁用 cookie 的方法因浏览器而异,但通常可以从\'工具\'或\'选项\'菜单中完成。您还可以查阅浏览器的帮助菜单,从中可以找到说明。用户可以随时选择他想在本网站上使用哪些 cookie。您可以通过配置安装在您计算机上的浏览器的选项来允许、阻止或消除安装在您计算机上的 cookie:', '*注意:链接的操作取决于服务提供商。 ', 'Declaration of cookies', 'Declaration of cookies', '您可以查阅本开源项目的文档和文档中使用的cookies。', '要访问,点击以下链接将带您到官方文档和项目代码。', '访问官方文档。', '接受政策。', '接受政策。', ' JCP_helper 假设您接受cookies的使用。但是,它会在每次登录时在门户任何页面的底部或顶部显示有关其 Cookie 政策的信息,以便您了解此信息,可以执行以下操作:', ' ⚫ 接受 cookie .在此会话期间访问门户的任何页面时,不会再次显示此通知。 ⚫ 关闭。该通知隐藏在此页面上。']
        }
    },
    "saber_mas": {
        "textEspanol": {
            texts: ['Saber más.', 'Saber más.', 'Saber más.', 'Descargar', 'Cookies', 'Privacidad', 'Términos', 'Secciones', 'Documentación', 'Equipo', 'Contacto', 'Código', 'Políticas', 'Documentación', 'Documentación', 'En esta sección podra encontrar información sobre los documentos oficiales del proyecto.', '⚫ En la documentación tendrá acceso a datos sobre la arquitectura del proyecto, objetivos, justificación, estado del arte, diagramas, diseños previos, teoría sobre los modelos de ML, presentaciones previas, artefactos, recursos y mucho más.', 'Documentación oficial.', 'Equipo', 'Equipo', 'Agradecemos a todas y todos los profesores que han participado de este proyecto y que nos han apoyado con su retroalimentación y comentarios. (en orden alfabético)', 'Directoras', 'Sinodales', 'Profesoras de seguimiento', 'Alumnos', 'Contacto', 'Contacto', 'Puede contactar al equipo de desarrollo por medio de github. (en orden alfabético)', 'Alumnos', 'Código', 'Código', 'Puede acceder al código fuente en el enlace al repositorio de Github que aparece en la parte deabajo.', 'Si desea colaborar favor de enviar alguna solicitud para poder integrar al proyecto y del mismomodo leer el archivo Requirements.txt en el repositorio para conocer los requisitos de ejecucióndel proyecto.', 'Código oficial.', 'Políticas.', 'Políticas.', 'Si desea conocer a fondo las politicas del proyecto en términos de privacidad, cookies y losterminos de uso, puede visitar los siguientes enlaces.', 'Politica de privacidad.', 'Política de cookies.', 'Terminos y condiciones de uso.']
        },
        "textIngles": {
            texts: ['Know more.', 'Know more.', 'Know more.', 'Download', 'Cookies', 'Privacy', 'Terms', 'Sections', 'Documentation', 'Team', 'Contact', 'Code', 'Policies', 'Documentation', 'Documentation', 'In this section you can find information about the official documents of the project.', '⚫ In the documentation you will have access to data on the project\'s architecture, objectives, justification , state of the art, diagrams, pre-designs, theory about ML models, prepresentations, artifacts, resources and much more.', 'Official documentation.', 'Team', 'Team', 'We thank all the teachers who have participated in this project and who have supported us with their feedback and comments. (in alphabetical order)', 'Directors', 'Synodals', 'Monitoring teachers', 'Students', 'Contact', 'Contact', 'You can contact the development team through github. (in alphabetical order)', 'Students', 'Code', 'Code', 'You can access the source code in the link to the Github repository that appears below.', 'If you want to contribute, please send a request to be able to integrate into the project and in the same way read the Requirements.txt file in the repository to know the project execution requirements.', 'Official code.', 'Policies.', 'Policies.', 'If you want to know in depth the project policies in terms of privacy, cookies and the terms of use, you can visit the following links.', 'Privacy policy.', 'Cookies policy.', 'Terms and conditions of use.']
        },
        "textPortugues": {
            texts: ['Saiba mais.', 'Saiba mais.', 'Saiba mais.', 'Download', 'Cookies', 'Privacidade', 'Termos', 'Seções', 'Documentação', 'Equipe', 'Contato', 'Código', 'Políticas', 'Documentação', 'Documentação', 'Nesta seção você encontra informações sobre os documentos oficiais do projeto.', '⚫ Na documentação você terá acesso a dados sobre a arquitetura do projeto, objetivos, justificativas, estado da arte, diagramas, pré-projetos, teoria sobre modelos de ML, pré-apresentações, artefatos, recursos e muito mais.', 'Documentação oficial.', 'Equipe', 'Equipe', 'Agradecemos todos os professores que participaram deste projeto e que nos apoiaram com seus feedbacks e comentários. (em ordem alfabética)', 'Diretores', 'Sinodais', 'Professores de acompanhamento', 'Estudantes', 'Contato', 'Contato', 'Você pode entrar em contato com a equipe de desenvolvimento através do github. (em ordem alfabética)', 'Alunos', 'Código', 'Código', 'Você pode acessar o código-fonte no link para o repositório do Github que aparece abaixo.', 'Se você deseja contribuir, envie uma solicitação para poder integrar no projeto e da mesma forma ler o arquivo Requirements.txt no repositório para conhecer os requisitos de execução do projeto.', 'Código oficial.', 'Políticas.', 'Políticas.', 'Se você deseja conhecer em profundidade as políticas do projeto em termos de privacidade, cookies e condições de uso, pode visitar os seguintes links.', 'Política de privacidade.', 'Política de cookies.', 'Termos e condições de uso.']
        },
        "textChino": {
            texts: ['了解更多。', '了解更多。', '了解更多', '下载', 'Cookies', '隐私', '条款', '章节', '文档', '团队', '联系', 'Code', 'Policies', 'Documentation', 'Documentation', '在本节中,您可以找到有关项目官方文档的信息。', '⚫ 在文档中,您将可以访问有关项目架构的数据,目标、理由、最新技术、图表、预设计、关于 ML 模型的理论、预演示、工件、资源等等。', '官方文档。', '团队', '团队', '我们感谢所有参与该项目并提供反馈和意见支持我们的教师。 (按字母顺序排列)', 'Directors', 'Synodals', 'Monitoring teachers', 'Students', 'Contact', 'Contact', '可以通过github联系开发团队。 （按字母顺序排列）', 'Students', 'Code', 'Code', '您可以在下面显示的 Github 存储库链接中访问源代码。', '如果您想贡献,请发送请求能够集成到项目中,同样的方式读取仓库中的Requirements.txt文件,了解项目执行要求。', '官方代码。', 'Policies.', 'Policies.', '如果你想深入了解隐私、cookie 和使用条款方面的项目政策,您可以访问以下链接。', '隐私政策', 'Cookie 政策', '使用条款和条件']
        }
    },
    "terminos_condiciones": {
        "textEspanol": {
            texts: ['Términos y condiciones.', 'Términos y condiciones.', 'Términos y condiciones.', 'Descargar', 'Privacidad', 'Cookies', 'Saber más', 'Secciones', 'Información relevante', 'Licencia', 'Uso no autorizado', 'Propiedad', 'Aclaraciones', 'Información relevante', 'Información relevante', 'Es requisito necesario para la adquisición de los servicios que se ofrecen en este sitio, quelea y acepte los siguientes Términos y Condiciones que a continuación se redactan.', 'El uso de nuestros servicios implicará que usted ha leído y aceptado los Términos y Condicionesde Usoen el presente documento. Todas los servicios que son ofrecidos por nuestro sitio webpudieran ser creadas, cobradas, enviadas o presentadas por una página web tercera y en talcaso estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirirun servicio, será necesario el registro por parte del usuario, con ingreso de datos personalesfidedignos y definición de una contraseña.', 'El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta encualquier momento, en caso de que se haya registrado y que sea necesario para la solicitudde alguno de nuestros servicios. JCP_helper no asume la responsabilidad encaso de que entregue dicha clave a terceros.', 'Licencia', 'Licencia', 'El software es de licencia MIT, por lo que resulta importante para efectos de su conocimientoen que consiste dicha licencia.', '⚫ La licencia MIT es una licencia de software que fue creada en el Instituto Tecnológico de Massachusetts y es posible usarla tanto para licenciar software libre como software no libre. Debido a las distintas licencias que ha empleado el MIT, se recomienda usar la denominación licencia X11 por ser esta a la cual se refiere generalmente cuando se habla de licencia MIT. Se encuentra entre las licencias compatibles con GNU-GPL y es muy parecida a la Licencia BSD.', 'La primera característica es que es una licencia sin copyleft, lo que permite que la creación de trabajos derivados a partir de ella pudieran ser no libres. Siempre debe adjuntarse una copia de la licencia con el software que se distribuya. Por otro lado, concede al usuario final los derechos de usar, copiar, modificar, publicar, distribuir o sublicenciar el software.', 'Uso no autorizado', 'Uso no autorizado', ' En caso de que aplique (para venta de software, templetes, u otro producto de diseño y programación) usted no puede colocar uno de nuestros productos, modificado o sin modificar, en un CD, sitio web o ningún otro medio y ofrecerlos para la redistribución o la reventa de ningún tipo.', 'Propiedad', 'Propiedad', 'Todos los servicios son propiedad de los proveedores del contenido. En caso de que no se especifique lo contrario, nuestros servicios se proporcionan sin ningún tipo de garantía, expresa o implícita. En ningún momento esta compañía será responsable de ningún daño incluyendo, pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros servicios.', 'En caso de que requiera alguna especificación adicional, es importante enviar un correo a JCP_helper@gmail.com para aclaraciones adicionales con el equipo. También puede revisar la documentación oficial para más información sobre característica básicas del software.', 'Acceso a documentación oficial.', 'Aclaraciones.', 'Aclaraciones.', 'JCP_helper garantiza que la información personal que usted envía cuenta con la seguridad necesaria. Puede revisar más a detalle en nuestra POLÍTICA DE PRIVACIDAD', 'JCP_helper reserva los derechos de cambiar o de modificar estos términos sin previo aviso.']
        },
        "textIngles": {
            texts: ['Terms and Conditions.', 'Terms and Conditions.', 'Terms and Conditions.', 'Download', 'Privacy', 'Cookies', 'Know more', 'Sections', 'Relevant information', 'License', 'Unauthorized use', 'Property', 'clarifications', 'Relevant information', 'Relevant information', 'It is a necessary requirement for the acquisition of the services offered on this site, that you read and accept the following Terms and Conditions that are written below.', 'The use of our services will imply that you have read and accepted the Terms and Conditions of Use in this document. All the services that are offered by our website could be created, charged, sent or presented by a third web page and in such a case they would be subject to their own Terms and Conditions. In some cases, to acquire a service, registration by the user will be necessary, with the entry of reliable personal data and definition of a password.', 'The user can choose and change the password for his account administration access at any time, in case he has registered and that it is necessary for the request of any of our services. JCP_helper does not take responsibility in case you give sHelp key to third parties.', 'License', 'License', 'The software is licensed by MIT, so it is important for you to know what that license consists of.', '⚫ The MIT license is a software license that was created at the Massachusetts Institute of Technology and can be used to license both free and non-free software. Due to the different licenses that MIT has used, it is recommended to use the name X11 license as this is what is generally referred to when talking about the MIT license. It is among the GNU-GPL compatible licenses and is very similar to the BSD License.', 'The first characteristic is that it is a non-copyleft license, which allows the creation of derivative works from it to be non-free. A copy of the license must always accompany the software that is distributed. On the other hand, it grants the end user the rights to use, copy, modify, publish, distribute or sublicense the software.', 'Unauthorized use', 'Unauthorized use', ' If applicable (for sale of software , templates, or other design and programming product) you may not place one of our products, modified or unmodified, on a CD, website, or any other media and offer it for redistribution or resale of any kind.', 'Property', 'Property', 'All services are property of content providers. Unless otherwise specified, our services are provided without any kind of warranty, express or implied. At no time will this company be liable for any damages including, but not limited to, direct, indirect, special, incidental or consequential damages or other losses resulting from the use or inability to use our services.', 'In case you require any additional specifications, it is important to send an email to JCP_helper@gmail.com for additional clarifications with the team. You can also check the official documentation for more information on basic features of the software.', 'Access to official documentation.', 'Clarifications.', 'Clarifications.', 'JCP_helper guarantees that the personal information you submit has the necessary security. You can review more detail in our PRIVACY POLICY', 'JCP_helper reserves the rights to change or modify these terms without prior notice.']
        },
        "textPortugues": {
            texts: ['Termos e Condições.', 'Termos e Condições.', 'Termos e Condições.', 'Descarga', 'Privacidade', 'Cookies', 'Saber mais', 'Seções', 'Informação relevante', 'Licença', 'Uso não autorizado', 'Propriedade', 'esclarecimentos', 'Informação relevante', 'Informação relevante', 'É um requisito necessário para a aquisição dos serviços oferecidos neste site, que você leia e aceite os seguintes Termos e Condições que estão escritos abaixo.', 'O uso de nossos serviços implicará que você leu e aceitou os Termos e Condições de Uso deste documento. Todos os serviços oferecidos pelo nosso site podem ser criados, cobrados, enviados ou apresentados por uma terceira página da web e, nesse caso, estariam sujeitos aos seus próprios Termos e Condições. Em alguns casos, para adquirir um serviço, será necessário o registo por parte do utilizador, com a introdução de dados pessoais fidedignos e definição de uma palavra-passe.', 'O usuário pode escolher e alterar a senha de acesso à administração de sua conta a qualquer momento, caso já tenha cadastro e seja necessário para a solicitação de algum de nossos serviços. JCP_helper não se responsabiliza caso você dê a chave a terceiros.', 'Licença', 'Licença', 'O software é licenciado pelo MIT, por isso é importante que você saiba em que consiste essa licença.', '⚫ A licença MIT é uma licença de software que foi criada no Instituto de Tecnologia de Massachusetts e pode ser usada para licenciar software livre e não-livre. Devido às diferentes licenças que o MIT usou, é recomendável usar o nome de licença X11, pois é a isso que geralmente se refere quando se fala sobre a licença MIT. Está entre as licenças compatíveis com GNU-GPL e é muito semelhante à licença BSD.', 'A primeira característica é que é uma licença não copyleft, o que permite que a criação de trabalhos derivados dela seja não-livre. Uma cópia da licença deve sempre acompanhar o software distribuído. Por outro lado, concede ao usuário final o direito de usar, copiar, modificar, publicar, distribuir ou sublicenciar o software.', 'Uso não autorizado', 'Uso não autorizado', ' Se aplicável (para venda de software, modelos, ou outro produto de design e programação) você não pode colocar um de nossos produtos, modificado ou não modificado, em um CD, site ou qualquer outra mídia e oferecê-lo para redistribuição ou revenda de qualquer tipo.', 'Propriedade', 'Propriedade', 'Todos os serviços são propriedade de provedores de conteúdo. A menos que especificado de outra forma, nossos serviços são fornecidos sem qualquer tipo de garantia, expressa ou implícita. Em nenhum momento esta empresa será responsável por quaisquer danos, incluindo, mas não limitado a, danos diretos, indiretos, especiais, incidentais ou consequentes ou outras perdas resultantes do uso ou incapacidade de usar nossos serviços.', 'Caso necessite de alguma especificação adicional, é importante enviar um e-mail para JCP_helper@gmail.com para esclarecimentos adicionais com a equipe. Você também pode verificar a documentação oficial para obter mais informações sobre os recursos básicos do software.', 'Acesso à documentação oficial.', 'Esclarecimentos.', 'Esclarecimentos.', 'JCP_helper garante que as informações pessoais que você envia têm a segurança necessária. Você pode revisar mais detalhadamente em nossa POLÍTICA DE PRIVACIDADE', 'JCP_helper reserva-se o direito de alterar ou modificar estes termos sem aviso prévio.']
        },
        "textChino": {
            texts: ['条款和条件。', '条款和条件。', '条款和条件。', '释放', '隐私', '饼干', '了解更多', '节', '相关信息', '执照', '未经授权使用', '财产', '澄清', '相关信息', '相关信息', '这是获得本网站提供的服务的必要条件,您阅读并接受以下条款和条件。', '使用我们的服务将意味着您已阅读并接受本文档中的使用条款和条件。我们网站提供的所有服务都可以由第三方网页创建、收费、发送或呈现,在这种情况下,它们将受其自己的条款和条件的约束。在某些情况下,要获得服务,需要用户注册,并输入可靠的个人数据和定义密码。', '用户可以随时选择和更改其帐户管理访问的密码,以防他已经注册并且需要我们的任何服务请求。如果您将上述密钥提供给第三方,JCP_helper 不承担任何责任。', '执照', '执照', '该软件由麻省理工学院授权,因此了解该许可证的内容对您来说很重要。', '⚫ MIT 许可证是麻省理工学院创建的软件许可证,可用于许可自由和非自由软件。由于 MIT 使用的许可证不同,建议使用名称 X11 许可证,因为这是通常在谈论 MIT 许可证时所指的名称。它是 GNU-GPL 兼容许可证之一,与 BSD 许可证非常相似。', '第一个特征是它是一个非 copyleft 许可证,允许从中创建衍生作品是非自由的。分发的软件必须始终附有许可证的副本。另一方面,它授予最终用户使用、复制、修改、发布、分发或再许可软件的权利。', 'Unauthorized use', 'Unauthorized use', '如果适用（用于销售软件、模板、或其他设计和编程产品）您不得将我们的任何产品（无论是修改过的还是未修改过的）放在 CD、网站或任何其他媒体上,并提供它用于任何形式的再分发或转售。', '财产', '财产', '所有服务都是内容提供商的财产。除非另有说明,否则我们提供的服务不提供任何明示或暗示的保证。本公司在任何时候均不对任何损害承担责任,包括但不限于直接、间接、特殊、附带或后果性损害或因使用或无法使用我们的服务而导致的其他损失。', '如果您需要任何其他规格,请务必发送电子邮件至 JCP_helper@gmail.com,以便与团队进行进一步说明。您还可以查看官方文档以获取有关软件基本功能的更多信息。', '访问官方文档。', '澄清。', '澄清。', 'JCP_helper保证您提交的个人信息具有必要的安全性。您可以在我们的隐私政策中查看更多详细信息', 'JCP_helper 保留更改或修改这些条款的权利,恕不另行通知。']
        }
    },
    "ayuda": {
        "textEspanol": {
            texts: ['Ayuda.', 'Ayuda.', 'Ayuda.', 'Volver', 'Cuenta de usuario', 'Aspectos generales de cuenta', 'Personalización', 'Accesibilidad', 'Privacidad', 'Operaciones', 'Gestión de grupos', 'Gestión de cuestionarios', 'Banco de datos', 'Gestión de estadísticas', 'Descargar manual.', 'Descargar manual.', 'Descargar', 'Descague el manual de usuario y saque todo el provecho posible a JCP_helper', 'Aspectos generales de cuenta', 'Aspectos generales de cuenta', 'Existen dos tipos de usuarios con los siguientes funciones en general:', '⚫ Docentes: Estos se encargan de la creación de cuestionarios y grupos que seranresueltos por los alumnos y con la información de los resultados de esto la plataformaregresa datos estadisticos de los alumnos para poder facilitar el logro de sus objetivosde docencia', '⚫ Alumnos: Estos podran realizar cuestionarios y unirse a grupos creados por los docentes y poder ver los resultados de estos', 'Personalización', 'Personalización', 'Dentro de JCP_helper se tiene diferentes grados de personalización en varios elementos de la plataforma:', '⚫ Cuenta: Se permite para todos los usuarios al crear una cuenta poder seleccionar una foto de perfil.Esta foto puede ser modificada posteriormente por cualquier otra que se deseé.', '⚫ Colores / Paleta colores: Se permite para todos los usuarios cambiar entre paleta de colores que se clasifican en temas clásicos, oscuros y para gente con lossiguientes padecimientos deuteranomalia, deuteranopia, protanopia y tritanopia', '⚫ Grupos: Los docentes podran craer grupos que podran seleccionar un tipo de color de identificación y una foto de fondo', '⚫ Cuestionarios: Los docentes podran craer cuestionario que podran agregar a algunas preguntas con recursos audiovisuales', '⚫ Grupos: Los docentes podran craer grupos que podran seleccionar un tipo de color de identificación y una foto de fondo', 'Accesibilidad', 'Accesibilidad', 'Los docentes son los que tienen el accesos a todos los elementos como grupos y cuestionarios, mientras que los alumnos solo tienen acceso a los cuestionarios hechos y a sus resultados', 'Aparte los docentes tendran acceso a los cuestionarios de otros docentes por medio de un API', 'Para la inclusión de otros usuarios se maneja dentro de las opciones paletas de colores para gente que deuteranomalia, deuteranopia, protanopia y tritanopia', 'Privacidad', 'Privacidad', 'Se garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3 / 2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales(LOPD GDD).Se cumple también con el Reglamento(UE) 2016 / 679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas(RGPD).', 'El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.', 'Para saber más se rerecomienda que se vea las secciones politica de privacidad, cookies y los terminos de uso y condiciones', 'Gestion de Grupos', 'Gestion de Grupos', 'Esta acción es exclusiva de los docentes y que consiste en la creación, modificación y eliminación de los grupos de alumnos que tiene el docente en la que estan los cuestionarios para estos', 'Para más información se recomienda leer el manual de usuario', 'Gestion de cuestionarios', 'Gestion de cuestionarios', 'Esta acción es exclusiva de los docentes y que consiste en la creación, modificación y eliminación de los cuestionarios de los grupos de alumnos que tiene el docente en la que estan los cuestionarios para estos', 'Para más información se recomienda leer el manual de usuario', 'Banco de datos', 'Banco de datos', 'Este es un elemento que colecta cuestionarios de todos los ya creados para servir como plantilla', 'Para más información se recomienda leer el manual de usuario', 'Gestión de estadísticas', 'Gestión de estadísticas', 'Este es un elemento que permite var la graficación de elementos de grupos, cuestionarios y alumnos', 'Para más información se recomienda leer el manual de usuario']
        },
        "textIngles": {
            texts: ['Help.', 'Help.', 'Help.', 'Return', 'User account', 'Account general aspects', 'Personalization', 'Accessibility', 'Privacy', 'Operations', 'Group management', 'test management', 'Data bank', 'Statistics management', 'Download manual.', 'Download manual.', 'Download', 'Download the user manual and get the most out of JCP_helper', 'Account general aspects', 'Account general aspects', 'There are two types of users with the following functions in general:', '⚫ Teachers: These are in charge of creating tests and groups that will be solved by the students and with the information of the results of this the platform returns statistical data of the students in order to facilitate the achievement of their teaching objectives', '⚫ Students: They will be able to take tests and join groups created by teachers and be able to see the results of these', 'Personalization', 'Personalization', 'Within JCP_helper you have different degrees of customization in various elements of the platform:', '⚫ Account: When creating an account, all users are allowed to select a profile photo. This photo can be later modified by any other desired.', '⚫ Colors / Color palette: It is allowed for all users to switch between color palettes that are classified into classic, dark themes and for people with the following conditions: deuteranomalia, deuteranopia, protanopia and tritanopia', '⚫ Groups: Teachers can create groups that can select a type of identification color and a background photo', '⚫ tests: Teachers can create a test that they can add to some questions with audiovisual resources', '⚫ Groups: Teachers can create groups that can select a type of identification color and a background photo', 'Accessibility', 'Accessibility', 'Teachers are the ones who have access to all the elements such as groups and tests, while students only have access to the tests made and their results', 'In addition, teachers will have access to the tests of other teachers through an API', 'For the inclusion of other users, color palettes for people who deuteranomaly, deuteranopia, protanopia and tritanopia are managed within the options', 'Privacy', 'Privacy', 'Compliance with current regulations on the protection of personal data is guaranteed, reflected in Organic Law 3 / 2018, of December 5, Protection of Personal Data and Guarantee of Digital Rights (LOPD GDD) .It also complies with Regulation (EU) 2016 / 679 of the European Parliament and of the Council of April 27, 2016 regarding the protection of natural persons (RGPD).', 'The use of the website implies acceptance of this Privacy Policy as well as the conditions included in the Legal Notice.', 'To find out more, it is recommended that you see the sections privacy policy, cookies and the terms of use and conditions', 'Group Management', 'Group Management', 'This action is exclusive to the teachers and it consists of the creation, modification and elimination of the groups of students that the teacher has in which the tests are for them', 'For more information it is recommended to read the user manual', 'test management', 'test management', 'This action is exclusive to the teachers and it consists of the creation, modification and elimination of the tests of the groups of students that the teacher has in which the tests for these are located', 'For more information it is recommended to read the user manual', 'Data bank', 'Data bank', 'This is an element that collects tests from all those already created to serve as a template', 'For more information it is recommended to read the user manual', 'Statistics management', 'Statistics management', 'This is an element that allows you to vary the graphing of group elements, tests and students', 'For more information it is recommended to read the user manual']
        },
        "textPortugues": {
            texts: ['Ajuda.', 'Ajuda.', 'Ajuda.', 'Retornar', 'Conta de usuario', 'Aspectos gerais da conta', 'Personalização', 'Acessibilidade', 'Privacidade', 'Operações', 'Gerenciamento de grupo', 'Gestão de questionários', 'Banco de dados', 'Gestão de estatísticas', 'Baixar manual.', 'Baixar manual.', 'Descarga', 'Baixe o manual do usuário e aproveite ao máximo o JCP_helper', 'Aspectos gerais da conta', 'Aspectos gerais da conta', 'Existem dois tipos de usuários com as seguintes funções em geral:', '⚫ Professores: Estes são os encarregados de criar questionários e grupos que serão resolvidos pelos alunos e com a informação dos resultados destes a plataforma devolve dados estatísticos dos alunos de forma a facilitar o alcance dos seus objectivos de ensino', '⚫ Alunos: Eles poderão responder questionários e participar de grupos criados por professores e poderão ver os resultados destes', 'Personalização', 'Personalização', 'Dentro do JCP_helper você tem diferentes graus de personalização em vários elementos da plataforma:', '⚫ Conta: Ao criar uma conta, todos os usuários podem selecionar uma foto de perfil. Essa foto pode ser posteriormente modificada por qualquer outra desejada.', '⚫ Cores / Paleta de cores: É permitido a todos os usuários alternar entre paletas de cores classificadas em temas clássicos, escuros e para pessoas com as seguintes condições: deuteranomalia, deuteranopia, protanopia e tritanopia', '⚫ Grupos: Os professores podem criar grupos que podem selecionar um tipo de cor de identificação e uma foto de fundo', '⚫ Questionários: Os professores podem criar um questionário que podem adicionar a algumas perguntas com recursos audiovisuais', '⚫ Grupos: Os professores podem criar grupos que podem selecionar um tipo de cor de identificação e uma foto de fundo', 'Acessibilidade', 'Acessibilidade', 'Os professores é que têm acesso a todos os elementos como grupos e questionários, enquanto os alunos apenas têm acesso aos questionários feitos e aos seus resultados', 'Além disso, os professores terão acesso aos questionários de outros professores por meio de uma API', 'Para inclusão de outros usuários, paletas de cores para pessoas com deuteranopia, deuteranopia, protanopia e tritanopia são gerenciadas dentro das opções', 'Privacidade', 'Privacidade', 'É garantido o cumprimento da normativa vigente sobre proteção de dados pessoais, refletida na Lei Orgânica 3/2018, de 5 de dezembro, Proteção de Dados Pessoais e Garantia de Direitos Digitais (LOPD GDD). EU) 2016/679 do Parlamento Europeu e do Conselho de 27 de abril de 2016 sobre a proteção de pessoas físicas (RGPD).', 'O uso do site implica a aceitação desta Política de Privacidade, bem como as condições incluídas no Aviso Legal.', 'Para saber mais, é recomendável que você consulte as seções política de privacidade, cookies e os termos e condições de uso', 'Gerenciamento de grupo', 'Gerenciamento de grupo', 'Esta ação é exclusiva dos professores e consiste na criação, modificação e eliminação dos grupos de alunos que o professor tem em que os questionários são para eles', 'Para mais informações, recomenda-se a leitura do manual do usuário', 'Gestão de questionários', 'Gestão de questionários', 'Esta ação é exclusiva dos professores e consiste na criação, modificação e eliminação dos questionários dos grupos de alunos que o professor possui nos quais estão localizados os questionários para estes', 'Para mais informações, recomenda-se a leitura do manual do usuário', 'Banco de dados', 'Banco de dados', 'Trata-se de um elemento que recolhe questionários de todos os já criados para servir de modelo', 'Para mais informações, recomenda-se a leitura do manual do usuário', 'Gestão de estatísticas', 'Gestão de estatísticas', 'Este é um elemento que permite variar a grafia dos elementos do grupo, questionários e alunos', 'Para mais informações, recomenda-se a leitura do manual do usuário']
        },
        "textChino": {
            texts: ['援助。', '援助。', '援助。', '返回', '用户帐号', '帐户一般方面', '个性化', '辅助功能', '隐私', '操作', '集团管理', '问卷管理', '数据银行', '统计管理', '下载手册。', '下载手册。', '释放', '下载用户手册并充分利用 JCP_helper', '帐户一般方面', '帐户一般方面', '一般有两类用户,具有以下功能：', '⚫ 教师：他们负责创建将由学生解决的问卷和小组,并根据此结果的信息,平台返回学生的统计数据,以促进他们的教学目标的实现', '⚫ 学生：他们将能够进行问卷调查并加入教师创建的小组,并能够看到这些结果', '个性化', '个性化', '在 JCP_helper 中,您可以对平台的各种元素进行不同程度的定制：', '⚫ 帐户：创建帐户时,所有用户都可以选择个人资料照片。以后可以根据需要修改此照片。', '⚫ 颜色/调色板：允许所有用户在分类为经典、深色主题的调色板之间切换,并且适用于具有以下条件的人：deuteranomalia、deuteranopia、protanopia 和 tritanopia', '⚫ 群组：教师可以创建可以选择一种识别颜色和背景照片的群组', '⚫ 问卷：教师可以创建一个问卷,他们可以使用视听资源将其添加到一些问题中', '⚫ 群组：教师可以创建可以选择一种识别颜色和背景照片的群组', '辅助功能', '辅助功能', '教师可以访问小组和问卷等所有元素,而学生只能访问所做的问卷及其结果', '此外,教师可以通过 API 访问其他教师的调查问卷', '为了包括其他用户,在选项中管理绿色盲、绿色盲、红色盲和蓝色盲的人的调色板', '隐私', '隐私', '保证遵守现行的个人数据保护法规,反映在 12 月 5 日第 3 / 2018 号组织法,个人数据保护和数字权利保障（LOPD GDD）。它也符合法规（ EU) 2016 年 4 月 27 日欧洲议会和理事会关于保护自然人 (RGPD) 的 2016 / 679。', '使用本网站意味着接受本隐私政策以及法律声明中包含的条件。', '要了解更多信息,建议您查看隐私政策、cookies 以及使用条款和条件', '集团管理', '集团管理', '此操作是教师独有的,它包括创建、修改和消除教师所拥有的学生群体,其中问卷是为他们准备的', '有关更多信息,建议阅读用户手册', '问卷管理', '问卷管理', '此操作是教师独有的,它包括创建、修改和消除教师所拥有的学生组的问卷,这些学生的问卷位于其中', '有关更多信息,建议阅读用户手册', '数据银行', '数据银行', '这是一个从所有已经创建的模板中收集问卷的元素', '有关更多信息,建议阅读用户手册', '统计管理', '统计管理', '这是一个允许您改变组元素、问卷和学生图形的元素', '有关更多信息,建议阅读用户手册']
        }
    },
    "login_general": {
        "textEspanol": {
            texts: ['Log in.', 'Log in.', 'Log in.', 'Volver al inicio', 'Docente', 'Estudiante', 'Cuenta docente', 'Cuenta docente', 'Correo', 'Contraseña', 'Olvide mi contraseña', 'Acceder', 'Cuenta estudiante', 'Cuenta estudiante', 'Correo', 'Contraseña', 'Olvide mi contraseña', 'Acceder', ...textosFooter[0]]
        },
        "textIngles": {
            texts: ['Log in.', 'Log in.', 'Log in.', 'Back to landing', 'Teacher', 'Student', 'Teacher account', 'Teacher account', 'Mail', 'Password', 'I forgot my password', 'Access', 'Student account', 'Student account', 'Mail', 'Password', 'I forgot my password', 'Access', ...textosFooter[1]]
        },
        "textPortugues": {
            texts: ['Conecte-se.', 'Conecte-se.', 'Conecte-se.', 'Voltar ao início', 'Professora', 'Aluna', 'Conta do professor', 'Conta do professor', 'Correspondência', 'Senha', 'Esqueci minha senha', 'Acessar', 'Conta de estudante', 'Conta de estudante', 'Correspondência', 'Senha', 'Esqueci minha senha', 'Acessar', ...textosFooter[2]]
        },
        "textChino": {
            texts: ['登录。', '登录。', '登录。', '回到顶部', '老师', '学生', '教师帐号', '教师帐号', '邮件', '密码', '我忘记了我的密码', '访问', '学生账户', '学生账户', '邮件', '密码', '我忘记了我的密码', '访问', ...textosFooter[3]]
        }
    },
    "signup_prof": {
        "textEspanol": {
            texts: ['Sign up docente.', 'Sign up docente.', 'Sign up docente.', 'Volver al inicio', 'Creación de cuenta', 'Creación de cuenta', 'Datos básicos', 'Nombre ', 'Alias ', 'Correo ', 'Password ', 'Confirmación ', 'Escuela de procedencia ', 'Descripción general (Opcional)', 'Foto de perfil', 'Elegir foto', 'Registrarse', ...textosFooter[0]]
        },
        "textIngles": {
            texts: ['Sign up teacher.', 'Sign up teacher.', 'Sign up teacher.', 'Back to landing', 'Account creation', 'Account creation', 'Basic data', 'Name ', 'Alias', 'Mail ', 'Password ', 'confirmation', 'School of origin ', 'Overview (Optional)', 'Profile picture', 'Choose photo', 'Check in', ...textosFooter[1]]
        },
        "textPortugues": {
            texts: ['Inscreva-se professor.', 'Inscreva-se professor.', 'Inscreva-se professor.', 'Voltar ao início', 'Criação de conta', 'Criação de conta', 'Dados básicos', 'Nome ', 'pseudônimo', 'Correspondência ', 'Senha ', 'confirmação', 'Escola de origem', 'Visão geral (opcional)', 'Imagem de perfil', 'Escolher Foto', 'Check-in', ...textosFooter[2]]
        },
        "textChino": {
            texts: ['报名老师。', '报名老师。', '报名老师。', '回到顶部', '帐户创建', '帐户创建', '基本数据', '姓名 ', '别名', '邮件 ', '密码 ', '确认', '原产地', '概述（可选）', '个人资料图片', '选择照片', '报到', ...textosFooter[3]]
        }
    },
    "signup_est": {
        "textEspanol": {
            texts: ['Sign up estudiante.', 'Sign up estudiante.', 'Sign up estudiante.', 'Volver al inicio', 'Creación de cuenta', 'Creación de cuenta', 'Datos básicos', 'Nombre ', 'Alias ', 'Correo ', 'Password ', 'Confirmación ', 'Escuela de procedencia ', 'Descripción general (Opcional)', 'Área de especialización (Opcional)', 'Foto de perfil', 'Elegir foto', 'Registrarse', ...textosFooter[0]]
        },
        "textIngles": {
            texts: ['Sign up student.', 'Sign up student.', 'Sign up student.', 'Back to top', 'Account creation', 'Account creation', 'Basic data', 'Name ', 'alias', 'Mail ', 'Password ', 'confirmation', 'School of origin ', 'Overview (Optional)', 'Area of specialization (Optional)', 'Profile picture', 'Choose photo', 'Check in', ...textosFooter[1]]
        },
        "textPortugues": {
            texts: ['Cadastre-se aluno.', 'Cadastre-se aluno.', 'Cadastre-se aluno.', 'Voltar ao início', 'Criação de conta', 'Criação de conta', 'Dados básicos', 'Nome ', 'pseudônimo', 'Correspondência ', 'Senha ', 'confirmação', 'Escola de origem', 'Visão geral (opcional)', 'Área de especialização (opcional)', 'Imagem de perfil', 'Escolher Foto', 'Check-in', ...textosFooter[2]]
        },
        "textChino": {
            texts: ['注册学生。', '注册学生。', '注册学生。', '回到顶部', '帐户创建', '帐户创建', '基本数据', '姓名 ', '别名', '邮件 ', '密码 ', '确认', '原产地', '概述（可选）', '专业领域（可选）', '个人资料图片', '选择照片', '报到', ...textosFooter[3]]
        }
    },
    "bienvenidaProfesor": {
        "textEspanol": {
            texts: ['Panel central.', 'Panel central.', 'Configuraciones', 'Ayuda', 'Cerrar sesión', 'Cuenta de docente', 'Gestionar grupos.', 'Gestionar cuestionarios.', 'Gestionar estadísticas.', 'Banco de datos.', 'Configuraciones.', 'Ayuda.', 'Temas', 'Temas clásicos', 'Temas oscuros', 'Accesibilidad', 'Deuteranomalia', 'Deuteranopia', 'Protanopia', 'Tritanopia', 'Adicionales', 'Cookies.', 'Privacidad.', 'Términos.', 'Saber más.', 'Aceptar política.', 'Cerrar sesión.', 'Menú de opciones', 'Menú de opciones', 'Gestionar grupos', 'Crear, editar,eliminar y administrar los grupos de estudiantes.', 'Gestionar cuestionarios', 'Crear, editar,eliminar,administrar los cuestionarios.', 'Gestionar estadísticas', 'Ver estadísticasdiversas sobre los grupos creados y las pruebas publicadas.', 'Banco de datos', 'Conozca más sobre el banco de datos y su funcionamiento.', 'Gestionar grupos', 'Crear,editar, eliminar y administrar los grupos de estudiantes.', 'Gestionar cuestionarios', 'Crear,editar, eliminar, administrar los cuestionarios.', 'Gestionar estadísticas', 'Ver estadísticas diversas sobre los grupos creados y las pruebas publicadas.', 'Banco de datos', 'Conozca más sobre el banco de datos y su funcionamiento', 'Gestionar grupos', 'Crear, editar, eliminar y administrar los grupos de estudiantes.', 'Gestionar cuestionarios', 'Crear, editar, eliminar, administrar los cuestionarios.', 'Gestionar estadísticas', 'Ver estadísticas diversas sobre los grupos creados y las pruebas publicadas.', 'Banco de datos', 'Conozca más sobre el banco de datos y su funcionamiento.', 'Resumen general', 'Resumen general', 'Número de grupos', 'Número de estudiantes', 'Número de cuestionarios', 'Número de respuestas', 'Número de grupos', 'Número de estudiantes', 'Número de cuestionarios', 'Número de respuestas', 'Políticas de privacidad', 'JCP_helper te informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través del sitio JCP_helper.com. En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).', 'Leer más...', 'Aceptar', 'Rechazar']
        },
        "textIngles": {
            texts: ['Main panel.', 'Main panel.', 'Settings', 'Help', 'Log out', 'Teacher account', 'Manage groups.', 'Manage tests.', 'Manage statistics.', 'Data bank.', 'Settings.', 'Help.', 'Colors', 'Classic Themes', 'Dark Themes', 'Accessibility', 'Deuteranomaly', 'Deuteranopia', 'Protanopia', 'Tritanopia', 'Additional', 'Cookies.', 'Privacy.', 'Terms.', 'Know more.', 'Accept policy.', 'Log out.', 'Options menu', 'Options menu', 'Manage groups', 'Create, edit, delete and manage student groups.', 'Manage tests', 'Create, edit, delete, manage tests.', 'Manage statistics', 'View various statistics about the groups created and the tests published.', 'Data bank', 'Learn more about the database and how it works.', 'Manage groups', 'Create, edit, delete and manage student groups.', 'Manage tests', 'Create, edit, delete, manage tests.', 'Manage statistics', 'View various statistics about groups created and tests published.', 'Data bank', 'Learn more about the database and its operation', 'Manage groups', 'Create, edit, delete and manage student groups.', 'Manage tests', 'Create, edit, delete, manage tests.', 'Manage statistics', 'View various statistics about groups created and tests published.', 'Data bank', 'Learn more about the database and how it works.', 'Overview', 'Overview', 'Number of groups', 'Number of students', 'Number of tests', 'Number of responses', 'Number of groups', 'Number of students', 'Number of tests', 'Number of responses', 'Privacy policies', 'JCP_helper informs you about its Privacy Policy regarding the treatment and protection of personal data of users and customers that may be collected by browsing or contracting services through the JCP_helper.com site. In this sense, the Owner guarantees compliance with current regulations on the protection of personal data, reflected in Organic Law 3/2018, of December 5, Protection of Personal Data and Guarantee of Digital Rights (LOPD GDD) . It also complies with Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 on the protection of natural persons (GDPR).', 'Read more...', 'OK', 'Reject']
        },
        "textPortugues": {
            texts: ['Painel central.', 'Painel central.', 'Definições', 'Ajuda', 'Fechar Sessão', 'Conta do professor', 'Gerenciar grupos.', 'Gerenciar questionários.', 'Gerenciar estatísticas.', 'Banco de dados.', 'Definições.', 'Ajuda.', 'Cores', 'Temas Clássicos', 'Temas Sombrios', 'Acessibilidade', 'Deuteranomalia', 'Deuteranopia', 'Protanopia', 'Tritanopia', 'adicional', 'Cookies.', 'Privacidade.', 'Termos.', 'Saber mais.', 'Aceitar política.', 'Fechar Sessão.', 'Menu de opções', 'Menu de opções', 'Gerenciar grupos', 'Criar, editar, excluir e gerenciar grupos de alunos.', 'Gerenciar questionários', 'Criar, editar, excluir, gerenciar questionários.', 'Gerenciar estatísticas', 'Ver várias estatísticas sobre os grupos criados e os testes publicados.', 'Banco de dados', 'Saiba mais sobre o banco de dados e como ele funciona.', 'Gerenciar grupos', 'Criar, editar, excluir e gerenciar grupos de alunos.', 'Gerenciar questionários', 'Criar, editar, excluir, gerenciar questionários.', 'Gerenciar estatísticas', 'Ver várias estatísticas sobre grupos criados e testes publicados.', 'Banco de dados', 'Saiba mais sobre o banco de dados e seu funcionamento', 'Gerenciar grupos', 'Criar, editar, excluir e gerenciar grupos de alunos.', 'Gerenciar questionários', 'Criar, editar, excluir, gerenciar questionários.', 'Gerenciar estatísticas', 'Ver várias estatísticas sobre grupos criados e testes publicados.', 'Banco de dados', 'Saiba mais sobre o banco de dados e como ele funciona.', 'Visão geral', 'Visão geral', 'Número de grupos', 'Número de estudantes', 'Número de questionários', 'Número de respostas', 'Número de grupos', 'Número de estudantes', 'Número de questionários', 'Número de respostas', 'Políticas de privacidade', 'JCP_helper informa sobre a sua Política de Privacidade relativa ao tratamento e protecção dos dados pessoais dos utilizadores e clientes que possam ser recolhidos pela navegação ou contratação de serviços através do site JCP_helper.com. Neste sentido, o Titular garante o cumprimento da normativa vigente sobre proteção de dados pessoais, refletida na Lei Orgânica 3/2018, de 5 de dezembro, Proteção de Dados Pessoais e Garantia de Direitos Digitais (LOPD GDD). Também está em conformidade com o Regulamento (UE) 2016/679 do Parlamento Europeu e do Conselho de 27 de abril de 2016 sobre a proteção de pessoas físicas (GDPR).', 'Ler mais...', 'Aceitar', 'No aceitar']
        },
        "textChino": {
            texts: ['中间面板。', '中间面板。', '设置', '援助', '登出', '教师帐号', '管理群组。', '管理问卷。', '管理统计数据。', '数据银行。', '设置。', '援助。', '话题', '经典主题', '黑暗主题', '辅助功能', 'Deuteranomaly', '绿色盲', '红色盲', 'Tritanopia', '额外的', '饼干。', '隐私。', '条款', '了解更多。', '接受政策。', '登出。', '选项菜单', '选项菜单', '管理群组', '创建、编辑、删除和管理学生组。', '管理问卷', '创建、编辑、删除、管理问卷。', '管理统计', '查看有关创建的组和发布的测试的各种统计数据。', '数据银行', '了解有关数据库及其工作原理的更多信息。', '管理群组', '创建、编辑、删除和管理学生组。', '管理问卷', '创建、编辑、删除、管理问卷。', '管理统计', '查看有关创建的组和发布的测试的各种统计数据。', '数据银行', '了解有关数据库及其操作的更多信息', '管理群组', '创建、编辑、删除和管理学生组。', '管理问卷', '创建、编辑、删除、管理问卷。', '管理统计', '查看有关创建的组和发布的测试的各种统计数据。', '数据银行', '了解有关数据库及其工作原理的更多信息。', '概述', '概述', '组数', '学生人数', '问卷数量', '回复数', '组数', '学生人数', '问卷数量', '回复数', '隐私政策', 'JCP_helper 告知您其关于处理和保护用户和客户个人数据的隐私政策,这些数据可能通过浏览 JCP_helper.com 网站或签订服务合同收集。 从这个意义上说,所有者保证遵守现行的个人数据保护法规,反映在 12 月 5 日第 3/2018 号组织法《个人数据保护和数字权利保障》(LOPD GDD) 中。 它还符合欧洲议会和理事会 2016 年 4 月 27 日关于保护自然人 (GDPR) 的条例 (EU) 2016/679。', '阅读更多...', '接受', '衰退']
        }
    },
    "gestionar_grupos": {
        "textEspanol": {
            texts: ['Gestionar grupos.', 'Grupos.', 'Grupos.', 'Volver', 'Operaciones.', 'Crear grupo', 'Buscador.', 'Buscar', 'Conteo.', 'Grupos:', 'Estudiantes:', 'Grupos creados', 'Grupos creados', 'Crear nuevo grupo', 'Ingrese los datos en el formulario para crear un nuevo grupo.', 'Datos del grupo', 'Nombre de grupo', 'Descripción del grupo', 'Diseño', 'Fondo por defecto', 'Fondo por defecto', 'URL de imagen', 'Código del grupo', 'Proporcione este código a sus estudiantes (sin espacios) para entrar al grupo.', 'Lenguajes del grupo', 'Listado de lenguajes', 'Temas del grupo', 'Número de temas', 'Generar casillas', 'Casillas temas', 'Enlistar temas', 'Listado de temas', 'Crear']
        },
        "textIngles": {
            texts: ['Manage groups.', 'Groups.', 'Groups.', 'Return', 'Operations.', 'Create group', 'Browser.', 'Search', 'Count.', 'Groups:', 'Students:', 'Created groups', 'Created groups', 'Create new group', 'Enter the data in the form to create a new group.', 'Group data', 'Group name', 'Group description', 'Design', 'Default background', 'Default background', 'image url', 'Group code', 'Give your students this code (no spaces) to join the group.', 'Group languages', 'List of languages', 'Group Topics', 'Number of topics', 'Generate boxes', 'Subject boxes', 'List topics', 'List of topics', 'Create']
        },
        "textPortugues": {
            texts: ['Gerenciar grupos.', 'Grupos.', 'Grupos.', 'Retornar', 'Operações.', 'Criar grupo', 'Buscador.', 'Procurar', 'Contar.', 'Grupos:', 'Estudantes:', 'Grupos criados', 'Grupos criados', 'Criar novo grupo', 'Digite os dados no formulário para criar um novo grupo.', 'Dados do grupo', 'Nome do grupo', 'Descrição do grupo', 'Projeto', 'Fundo padrão', 'Fundo padrão', 'imagem URL', 'Código de grupo', 'Dê a seus alunos este código (sem espaços) para entrar no grupo.', 'Idiomas de grupo', 'Lista de idiomas', 'Tópicos do Grupo', 'Número de tópicos', 'Gerar caixas', 'Caixas de assunto', 'Listar tópicos', 'Lista de tópicos', 'Criar post']
        },
        "textChino": {
            texts: ['管理群组。', '团体。', '团体。', '返回', '操作', '创建组', '探索者', '搜索', '数数。', '团体：', '学生：', '创建的组', '创建的组', '创建新组', '在表单中输入数据以创建新组。', '组数据', '团队名字', '小组介绍', '设计', '默认背景', '默认背景', '图片网址', '组代码', '给你的学生这个代码（没有空格）加入小组。', '集团语言', '语言列表', '小组主题', '主题数', '生成框', '主题框', '列出主题', '主题列表', '去创造']
        }
    },
    "editGroup": {
        "textEspanol": {
            texts: ['Editar grupo.', 'Editar grupo.', 'Editar grupo.', 'Volver', 'Formulario de', 'Formulario de', 'Datos del grupo', 'Nombre de grupo', 'Descripción del grupo', 'Diseño', 'Fondo por defecto', 'Fondo por defecto', 'URL de imagen', 'Código del grupo', 'Lenguajes del grupo', 'Listado de lenguajes', 'Temas del grupo', 'Número de temas', 'Generar casillas', 'Casillas temas', 'Enlistar temas', 'Listado de temas', 'Editar'
            ]
        },
        "textIngles": {
            texts: ['Edit group.', 'Edit group.', 'Edit group.', 'Return', 'Form of', 'Form of', 'Group data', 'Group name', 'Group description', 'Design', 'Default background', 'Default background', 'image url', 'Group code', 'Group languages', 'List of languages', 'Group Topics', 'Number of topics', 'Generate boxes', 'Subject boxes', 'List topics', 'List of topics', 'Edit']
        },
        "textPortugues": {
            texts: ['Editar grupo.', 'Editar grupo.', 'Editar grupo.', 'Retornar', 'Forma de', 'Forma de', 'Dados do grupo', 'Nome do grupo', 'Descrição do grupo', 'Projeto', 'Fundo padrão', 'Fundo padrão', 'imagem URL', 'Código de grupo', 'Idiomas de grupo', 'Lista de idiomas', 'Tópicos do Grupo', 'Número de tópicos', 'Gerar caixas', 'Caixas de assunto', 'Listar tópicos', 'Lista de tópicos', 'Editar']
        },
        "textChino": {
            texts: ['编辑组。', '编辑组。', '编辑组。', '返回', '形式', '形式', '组数据', '团队名字', '小组介绍', '设计', '默认背景', '默认背景', '图片网址', '组代码', '集团语言', '语言列表', '小组主题', '主题数', '生成框', '主题框', '列出主题', '主题列表', '编辑']
        }
    },
    "viewGroup": {
        "textEspanol": {
            texts: ['Ver grupo.', 'Ver grupo.', 'Ver grupo.', 'Volver', 'Datos generales', 'Descripción de grupo:', 'Lenguajes del grupo:', 'Temas del grupo:', 'Cuestionarios. ', 'Alumnos. ']
        },
        "textIngles": {
            texts: ['View group.', 'View group.', 'View group.', 'Return', 'General data', 'Group description:', 'Group languages:', 'Group Topics:', 'tests. ', 'Students. ']
        },
        "textPortugues": {
            texts: ['Visualizar grupo.', 'Visualizar grupo.', 'Visualizar grupo.', 'Retornar', 'Dados gerais', 'Descrição do grupo:', 'Idiomas do grupo:', 'Tópicos do grupo:', 'Questionários. ', 'Estudantes. ']
        },
        "textChino": {
            texts: ['查看组。', '查看组。', '查看组。', '返回', '一般数据', '小组介绍：', '集团语言：', '小组主题：', '问卷调查。 ', '学生。 ']
        }
    },
    "viewCuestionario": {
        "textEspanol": {
            texts: ['Ver cuestionario.', 'Ver cuestionario.', 'Ver cuestionario.', 'Volver', 'Esta es una vista previa, con las preguntas ordenadas por tipo y con sus respuestas.', 'Preview cuestionario', 'Datos generales.', 'Fecha:', 'Autor:', 'Temas:', 'Tipo de cuestionario:', 'Lenguaje:', 'Contador preguntas', 'Total preguntas: ', 'Opción múltiple: ', 'Rellenar espacios: ', 'Ejercicios prácticos: ', 'Arrastrar conceptos: ', 'Falso/Verdadero: ', 'Preguntas abiertas: ', 'Ver como alumno', 'Preguntas cuestionario']
        },
        "textIngles": {
            texts: ['See test.', 'See test.', 'See test.', 'Return', 'This is a preview, with the questions ordered by type and with their answers.', 'Preview test', 'General data.', 'Date:', 'Author:', 'Topics:', 'Quiz type:', 'Language:', 'Question counter', 'Total questions: ', 'Multiple choice: ', 'Fill spaces: ', 'Practical exercises: ', 'Drag concepts: ', 'False true: ', 'Open questions: ', 'See as a student', 'Quiz questions']
        },
        "textPortugues": {
            texts: ['Ver questionário.', 'Ver questionário.', 'Ver questionário.', 'Retornar', 'Esta é uma prévia, com as perguntas ordenadas por tipo e com suas respostas.', 'Questionário de visualização', 'Dados gerais.', 'Encontro:', 'Autor:', 'Tópicos:', 'Tipo de questionário:', 'Linguagem:', 'Contador de perguntas', 'Total de perguntas: ', 'Múltipla escolha: ', 'Preencher espaços: ', 'Exercícios práticos: ', 'Arrastar conceitos: ', 'Falso verdadeiro: ', 'Perguntas abertas: ', 'Ver como estudante', 'Perguntas do questionário']
        },
        "textChino": {
            texts: ['查看问卷。', '查看问卷。', '查看问卷。', '返回', '这是一个预览,问题按类型排序并附有答案。', '预览问卷', '一般数据。', '日期：', '作者：', '话题：', '测验类型：', '语：', '问题计数器', '总问题：', '多项选择： ', '填充空格：', '实践练习：', '拖动概念：', '假真：', '开放式问题：', '作为学生看待', '测验问题']
        }
    },
    "previewVerComoALumnoCuestionario": {
        "textEspanol": {
            texts: ['Preview de alumno.', 'Preview de alumno.', 'Preview de alumno.', 'Volver', 'Usted puede ver el cuestionario como lo vería el estudiante al momento de contestar.', 'Tablero de información.', 'Total preguntas:', 'Respondidas:', 'Orden:', 'Días restantes:', 'Minutos restantes:', 'Simular entrega', 'Volver a la vista general', 'Preguntas cuestionario', '¿Desea enviar el cuestionario?', 'Este procedimiento no se puede revertir.', 'Enviar']
        },
        "textIngles": {
            texts: ['Student preview.', 'Student preview.', 'Student preview.', 'Return', 'You can see the Test as the student would see it when answering.', 'Information board.', 'Total questions:', 'Answers:', 'Order:', 'Remaining days:', 'Remaining minutes:', 'Simulate delivery', 'Back to overview', 'Quiz questions', 'Do you want to send the Test?', 'This procedure cannot be reversed.', 'Send']
        },
        "textPortugues": {
            texts: ['Visualização do aluno.', 'Visualização do aluno.', 'Visualização do aluno.', 'Retornar', 'Você pode ver o questionário como o aluno o veria ao responder.', 'Painel de informações.', 'Total de perguntas:', 'Respostas:', 'Ordem:', 'Dias restantes:', 'Minutos restantes:', 'Simular entrega', 'Voltar ao menu principal', 'Perguntas do questionário', 'Deseja enviar o questionário?', 'Este procedimento não pode ser revertido.', 'Mandar']
        },
        "textChino": {
            texts: ['学生预览。', '学生预览。', '学生预览。', '返回', '您可以像学生回答时看到的那样看到问卷。', '信息板。', '总问题：', '答案：', '命令：', '剩余天数：', '剩余分钟数：', '模拟交付', '返回概览', '测验问题', '你想发送问卷吗？', '此过程不可逆。', '发送']
        }
    },
    "simularRevision": {
        "textEspanol": {
            texts: ['Resultados de preview.', 'Resultados de preview.', 'Resultados de preview.', 'Volver', 'Usted esta observando el cuestionario cuando el alumno ya lo ha enviado y como algunas respuestas han sido evaluadas automaticamente.', 'Resultados', 'Preguntas y puntaje', 'Preguntas y puntaje', 'Preguntas/Respuestas cuestionario']
        },
        "textIngles": {
            texts: ['Preview results.', 'Preview results.', 'Preview results.', 'Return', 'You are observing the Test when the student has already sent it and how some answers have been evaluated automatically.', 'Results', 'Questions and scoring', 'Questions and scoring', 'Questions/Answers Test']
        },
        "textPortugues": {
            texts: ['Visualizar resultados.', 'Visualizar resultados.', 'Visualizar resultados.', 'Retornar', 'Você está observando o questionário quando o aluno já o enviou e como algumas respostas foram avaliadas automaticamente.', 'Resultados', 'Perguntas e pontuação', 'Perguntas e pontuação', 'Questionário de perguntas/respostas']
        },
        "textChino": {
            texts: ['预览结果。', '预览结果。', '预览结果。', '返回', '当学生已经发送问卷时,您正在观察问卷以及如何自动评估一些答案。', '结果', '问题和评分', '问题和评分', '问答问卷']
        }
    },
    "perfil_general_view": {
        "textEspanol": {
            texts: ['Perfil de usuario.', 'Perfil de usuario.', 'Perfil de usuario.', 'Datos de la cuenta', 'Datos de la cuenta', 'Contacto', 'Unidad', 'Especialización', 'Publicaciones', 'Publicaciones'
            ]
        },
        "textIngles": {
            texts: ['User profile.', 'User profile.', 'User profile.', 'Account data', 'Account data', 'Contact', 'Academic unit', 'Specialization', 'User post', 'User post']
        },
        "textPortugues": {
            texts: ['Perfil de usuário.', 'Perfil de usuário.', 'Perfil de usuário.', 'Dados da conta', 'Dados da conta', 'Contato', 'Unidade', 'Especialização', 'Publicações', 'Publicações']
        },
        "textChino": {
            texts: ['用户资料。', '用户资料。', '用户资料。', '账户数据', '账户数据', '接触', '单元', '专业化', '出版物', '出版物']
        }
    },
    "perfil_alumno": {
        "textEspanol": {
            texts: ['Perfil del alumno.', 'Perfil del alumno.', 'Perfil del alumno.', 'Volver', 'Opciones', 'Ver foto', 'Modificar foto', 'Cambiar foto', 'Elegir', 'Datos de la cuenta', 'Datos de la cuenta', 'Contacto', 'Unidad', 'Especialización', 'Publicaciones', 'Publicaciones', 'Crear un nuevo POST', 'Haga una publicación para que otros usuarios en la plataforma puedan verla.', 'Datos del POST', 'Titulo del post', 'Descripción del post', 'Multimedia', 'URL de imagen', 'Crear', 'Ingresar URL', 'Agregar', 'Temas offline', 'Publicar']
        },
        "textIngles": {
            texts: ['Student profile.', 'Student profile.', 'Student profile.', 'Return', 'options', 'View photo', 'Modify photo', 'Change photo', 'To choose', 'Account data', 'Account data', 'Contact', 'Academic unit', 'Specialization', 'User posts', 'User posts', 'Create a new POST', 'Make a post so other users on the platform can see it.', 'POST data', 'Post title', 'Post description', 'Multimedia', 'image url', 'Post it', 'Enter URL', 'Add', 'Offline Themes', 'Post']
        },
        "textPortugues": {
            texts: ['Perfil do aluno.', 'Perfil do aluno.', 'Perfil do aluno.', 'Retornar', 'opções', 'Ver foto', 'Modificar foto', 'Mudar foto', 'Escolher', 'Dados da conta', 'Dados da conta', 'Contato', 'Unidade', 'Especialização', 'Publicações', 'Publicações', 'Criar um novo POST', 'Faça uma postagem para que outros usuários da plataforma possam vê-la.', 'Dados de postagem', 'Título da postagem', 'Descrição da postagem', 'Multimídia', 'imagem URL', 'Criar post', 'Inserir URL', 'Adicionar', 'Temas off-line', 'Publicar']
        },
        "textChino": {
            texts: ['学生档案。', '学生档案。', '学生档案。', '返回', '选项', '查看照片', '修改照片', '更改照片', '选择', '账户数据', '账户数据', '接触', '单元', '专业化', '出版物', '出版物', '创建一个新的帖子', '发布一个帖子,让平台上的其他用户可以看到它。', '发布数据', '帖子标题', '帖子描述', '多媒体', '图片网址', '去创造', '输入网址', '添加', '离线主题', '邮政']
        }
    },
    "perfil_docente": {
        "textEspanol": {
            texts: ['Perfil del docente.', 'Perfil del docente.', 'Perfil del docente.', 'Volver.', 'Opciones', 'Ver foto', 'Modificar foto', 'Cambiar foto', 'Elegir', 'Datos de la cuenta', 'Datos de la cuenta', 'Contacto', 'Unidad', 'Publicaciones', 'Publicaciones', 'Crear un nuevo POST', 'Haga una publicación para que otros usuarios en la plataforma puedan verla.', 'Datos del POST', 'Titulo del post', 'Descripción del post', 'Multimedia', 'URL de imagen', 'Crear', 'Ingresar URL', 'Agregar una imagen de internet para el perfil.', 'Agregar', 'Temas offline', 'Agregar una imagen para el perfil sin necesidad de conexión a internet']
        },
        "textIngles": {
            texts: ['Teacher\'s profile.', 'Teacher\'s profile.', 'Teacher\'s profile.', 'Return.', 'options', 'View photo', 'Modify photo', 'Change photo', 'To choose', 'Account data', 'Account data', 'Contact', 'Unit', 'Publications', 'Publications', 'Create a new POST', 'Make a post so other users on the platform can see it.', 'POST data', 'Post title', 'Post description', 'Multimedia', 'image url', 'Create post', 'Enter URL', 'Add an image from the internet to the profile.', 'Add', 'Offline Themes', 'Add an image to the profile without the need for an internet connection']
        },
        "textPortugues": {
            texts: ['Perfil do professor.', 'Perfil do professor.', 'Perfil do professor.', 'Retornar.', 'opções', 'Ver foto', 'Modificar foto', 'Mudar foto', 'Escolher', 'Dados da conta', 'Dados da conta', 'Contato', 'Unidade', 'Publicações', 'Publicações', 'Criar um novo POST', 'Faça uma postagem para que outros usuários da plataforma possam vê-la.', 'Dados de postagem', 'Título da postagem', 'Descrição da postagem', 'Multimídia', 'imagem URL', 'Criar post', 'Inserir URL', 'Adicione uma imagem da internet ao perfil.', 'Adicionar', 'Temas off-line', 'Adicione uma imagem ao perfil sem a necessidade de uma conexão com a internet']
        },
        "textChino": {
            texts: ['教师简介', '教师简介', '教师简介', '返回。', '选项', '查看照片', '修改照片', '更改照片', '选择', '账户数据', '账户数据', '接触', '单元', '出版物', '出版物', '创建一个新的帖子', '发布一个帖子,让平台上的其他用户可以看到它。', '发布数据', '帖子标题', '帖子描述', '多媒体', '图片网址', '去创造', '输入网址', '将来自互联网的图像添加到个人资料中。', '添加', '离线主题', '无需互联网连接即可将图像添加到个人资料']
        }
    },
    "editarPerfilProfesor": {
        "textEspanol": {
            texts: ['Editar perfil.', 'Editar perfil.', 'Editar perfil.', 'Volver', 'Formulario de edición.', 'Formulario de edición.', 'Datos de', 'Nombre de usuario', 'Alias de usuario', 'Descripción', 'Seguridad', 'Contraseña', 'Confirmar contraseña', 'Datos académicos', 'Unidad académica', 'Editar']
        },
        "textIngles": {
            texts: ['Edit profile.', 'Edit profile.', 'Edit profile.', 'Return', 'Edit form.', 'Edit form.', 'Data of', 'Username', 'User aliases', 'Description', 'Security', 'Password', 'Confirm Password', 'Academic data', 'Academic Unit', 'Edit']
        },
        "textPortugues": {
            texts: ['Editar Perfil.', 'Editar Perfil.', 'Editar Perfil.', 'Retornar', 'Editar formulário.', 'Editar formulário.', 'Dados de', 'Nome de usuário', 'Alcunhas de usuário', 'Descrição', 'Segurança', 'Senha', 'Confirmar senha', 'Dados académicos', 'Unidade Académica', 'Editar']
        },
        "textChino": {
            texts: ['编辑个人资料。', '编辑个人资料。', '编辑个人资料。', '返回', '编辑表格。', '编辑表格。', '来自', '用户名', '用户别名', '描述', '安全', '密码', '确认密码', '学术数据', '学术单位', '编辑']
        }
    },
    "editarPerfilAlumno": {
        "textEspanol": {
            texts: ['Editar perfil.', 'Editar perfil.', 'Editar perfil.', 'Volver', 'Formulario de edición.', 'Formulario de edición.', 'Datos de', 'Nombre de usuario', 'Alias de usuario', 'Descripción', 'Seguridad', 'Contraseña', 'Confirmar contraseña', 'Datos académicos', 'Area', 'Escuela', 'Editar']
        },
        "textIngles": {
            texts: ['Edit profile.', 'Edit profile.', 'Edit profile.', 'Return', 'Edit form.', 'Edit form.', 'Data of', 'Username', 'User aliases', 'Description', 'Security', 'Password', 'Confirm Password', 'Academic data', 'Area', 'School', 'Edit']
        },
        "textPortugues": {
            texts: ['Editar Perfil.', 'Editar Perfil.', 'Editar Perfil.', 'Retornar', 'Editar formulário.', 'Editar formulário.', 'Dados de', 'Nome de usuário', 'Alcunhas de usuário', 'Descrição', 'Segurança', 'Senha', 'Confirmar senha', 'Dados académicos', 'Área', 'Escola', 'Editar']
        },
        "textChino": {
            texts: ['编辑个人资料。', '编辑个人资料。', '编辑个人资料。', '返回', '编辑表格。', '编辑表格。', '茱莉亚数据', '用户名', '用户别名', '描述', '安全', '密码', '确认密码', '学术数据', '区域', '学校', '编辑']
        }
    },
    "bienvenidaEstudiante": {
        "textEspanol": {
            texts: ['Panel central.', 'Panel central.', 'Configuraciones', 'Ayuda', 'Cerrar sesión', 'Cuenta de estudiante', 'Mis grupos.', 'Mis resultados.', 'Configuraciones.', 'Ayuda.', 'Temas', 'Temas clásicos', 'Temas oscuros', 'Accesibilidad', 'Adicionales', 'Cookies.', 'Privacidad.', 'Términos.', 'Saber más.', 'Cerrar sesión.', 'Menú de opciones', 'Menú de opciones', 'Mis grupos', 'Acceda a sus grupos y resuelva sus cuestionarios.', 'Mis resultados', 'Revise sus resultado obtenidos en los cuestionarios.', 'Mis grupos', 'Acceda a sus grupos y resuelva sus cuestionarios.', 'Mis resultados', 'Revise sus resultado obtenidos en los cuestionarios.', 'Mis grupos', 'Acceda a sus grupos y resuelva sus cuestionarios.', 'Mis resultados', 'Revise sus resultado obtenidos en los cuestionarios.']
        },
        "textIngles": {
            texts: ['Central panel', 'Central panel', 'Settings', 'Help', 'Log out', 'Student account', 'My groups.', 'My results.', 'Settings.', 'Help', 'Styles', 'Classic Themes', 'Dark Themes', 'Accessibility', 'Additional', 'Cookies.', 'Privacy.', 'Terms.', 'Know more.', 'Log out.', 'Options menu', 'Options menu', 'My groups', 'Access your groups and solve your quizzes.', 'My results', 'Check your results obtained in the Tests.', 'My groups', 'Access your groups and solve your quizzes.', 'My results', 'Check your results obtained in the Tests.', 'My groups', 'Access your groups and solve your quizzes.', 'My results', 'Check your results obtained in the Tests.']
        },
        "textPortugues": {
            texts: ['Painel central', 'Painel central', 'Definições', 'Ajuda', 'Fechar Sessão', 'Conta de estudante', 'Meus grupos.', 'Meus resultados.', 'Definições.', 'Ajuda.', 'Tópicos', 'Temas Clássicos', 'Temas Sombrios', 'Acessibilidade', 'adicional', 'Cookies.', 'Privacidade.', 'Termos.', 'Saber mais.', 'Fechar Sessão.', 'Menu de opções', 'Menu de opções', 'Meus grupos', 'Acesse seus grupos e resolva seus quizzes.', 'Meus resultados', 'Verifique os resultados obtidos nos questionários.', 'Meus grupos', 'Acesse seus grupos e resolva seus quizzes.', 'Meus resultados', 'Verifique os resultados obtidos nos questionários.', 'Meus grupos', 'Acesse seus grupos e resolva seus quizzes.', 'Meus resultados', 'Verifique os resultados obtidos nos questionários.']
        },
        "textChino": {
            texts: ['中间面板。', '中间面板。', '设置', '援助', '登出', '学生账户', '我的群组。', '我的结果。', '设置。', '援助。', '话题', '经典主题', '黑暗主题', '辅助功能', '额外的', '饼干。', '隐私。', '条款', '了解更多。', '登出。', '选项菜单', '选项菜单', '我的群组', '访问您的群组并解决您的测验。', '我的成绩', '检查您在问卷中获得的结果。', '我的群组', '访问您的群组并解决您的测验。', '我的成绩', '检查您在问卷中获得的结果。', '我的群组', '访问您的群组并解决您的测验。', '我的成绩', '检查您在问卷中获得的结果。']
        }
    },
    "login_estudiante": {
        "textEspanol": {
            texts: ['Panel central.', 'Panel central.', 'Configuraciones', 'Ayuda', 'Cerrar sesión', 'Cuenta de estudiante', 'Mis grupos.', 'Mis resultados.', 'Configuraciones.', 'Ayuda.', 'Temas', 'Temas clásicos', 'Temas oscuros', 'Accesibilidad', 'Adicionales', 'Cookies.', 'Privacidad.', 'Términos.', 'Saber más.', 'Cerrar sesión.', 'Menú de opciones', 'Menú de opciones', 'Mis grupos', 'Acceda a sus grupos y resuelva sus cuestionarios.', 'Mis resultados', 'Revise sus resultado obtenidos en los cuestionarios.', 'Mis grupos', 'Acceda a sus grupos y resuelva sus cuestionarios.', 'Mis resultados', 'Revise sus resultado obtenidos en los cuestionarios.', 'Mis grupos', 'Acceda a sus grupos y resuelva sus cuestionarios.', 'Mis resultados', 'Revise sus resultado obtenidos en los cuestionarios.']
        },
        "textIngles": {
            texts: ['Central panel', 'Central panel', 'Settings', 'Help', 'Log out', 'Student account', 'My groups.', 'My results.', 'Settings.', 'Help', 'Styles', 'Classic Themes', 'Dark Themes', 'Accessibility', 'Additional', 'Cookies.', 'Privacy.', 'Terms.', 'Know more.', 'Log out.', 'Options menu', 'Options menu', 'My groups', 'Access your groups and solve your quizzes.', 'My results', 'Check your results obtained in the Tests.', 'My groups', 'Access your groups and solve your quizzes.', 'My results', 'Check your results obtained in the Tests.', 'My groups', 'Access your groups and solve your quizzes.', 'My results', 'Check your results obtained in the Tests.']
        },
        "textPortugues": {
            texts: ['Painel central', 'Painel central', 'Definições', 'Ajuda', 'Fechar Sessão', 'Conta de estudante', 'Meus grupos.', 'Meus resultados.', 'Definições.', 'Ajuda.', 'Tópicos', 'Temas Clássicos', 'Temas Sombrios', 'Acessibilidade', 'adicional', 'Cookies.', 'Privacidade.', 'Termos.', 'Saber mais.', 'Fechar Sessão.', 'Menu de opções', 'Menu de opções', 'Meus grupos', 'Acesse seus grupos e resolva seus quizzes.', 'Meus resultados', 'Verifique os resultados obtidos nos questionários.', 'Meus grupos', 'Acesse seus grupos e resolva seus quizzes.', 'Meus resultados', 'Verifique os resultados obtidos nos questionários.', 'Meus grupos', 'Acesse seus grupos e resolva seus quizzes.', 'Meus resultados', 'Verifique os resultados obtidos nos questionários.']
        },
        "textChino": {
            texts: ['中间面板。', '中间面板。', '设置', '援助', '登出', '学生账户', '我的群组。', '我的结果。', '设置。', '援助。', '话题', '经典主题', '黑暗主题', '辅助功能', '额外的', '饼干。', '隐私。', '条款', '了解更多。', '登出。', '选项菜单', '选项菜单', '我的群组', '访问您的群组并解决您的测验。', '我的成绩', '检查您在问卷中获得的结果。', '我的群组', '访问您的群组并解决您的测验。', '我的成绩', '检查您在问卷中获得的结果。', '我的群组', '访问您的群组并解决您的测验。', '我的成绩', '检查您在问卷中获得的结果。']
        }
    },
    "mis_grupos": {
        "textEspanol": {
            texts: ['Mis grupos.', 'Mis grupos.', 'Mis grupos.', 'Volver', 'Panel global', 'Panel global']
        },
        "textIngles": {
            texts: ['My groups.', 'My groups.', 'My groups.', 'Back', 'Global panel', 'Global panel']
        },
        "textPortugues": {
            texts: ['Meus grupos.', 'Meus grupos.', 'Meus grupos.', 'Voltar', 'Painel global', 'Painel global']
        },
        "textChino": {
            texts: ['我的群组', '我的群组', '我的群组', '返回', '全局面板', '全局面板']
        }
    },
    "viewTeacherProfile": {
        "textEspanol": {
            texts: ['Perfil de usuario.', 'Perfil de usuario.', 'Perfil de usuario.', 'Datos de la cuenta', 'Datos de la cuenta', 'Contacto', 'Unidad', 'Publicaciones', 'Publicaciones'
            ]
        },
        "textIngles": {
            texts: ['User profile.', 'User profile.', 'User profile.', 'Account data', 'Account data', 'Contact', 'Academic unit', 'User post', 'User post']
        },
        "textPortugues": {
            texts: ['Perfil de usuário.', 'Perfil de usuário.', 'Perfil de usuário.', 'Dados da conta', 'Dados da conta', 'Contato', 'Unidade', 'Publicações', 'Publicações']
        },
        "textChino": {
            texts: ['用户资料。', '用户资料。', '用户资料。', '账户数据', '账户数据', '接触', '专业化', '出版物', '出版物']
        }
    },
    "viewGroupEstudiante": {
        "textEspanol": {
            texts: ['Mis grupos.','Mis grupos.','Mis grupos.','Volver','Datos generales','Descripción de grupo:','Lenguajes del grupo:','Temas del grupo:','Cuestionarios.','Alumnos.']
        },
        "textIngles": {
            texts: ['My groups.','My groups.','My groups.','Return','General data','Group description:','Group languages:','Group Topics:','Tests.','Students.']
        },
        "textPortugues": {
            texts: ['Meus grupos.','Meus grupos.','Meus grupos.','Retornar','Dados gerais','Descrição do grupo:','Idiomas do grupo:','Tópicos do grupo:','Questionário.','Estudantes.']
        },
        "textChino": {
            texts: ['我的群组。','我的群组。','我的群组。','返回','一般数据','小组介绍：','集团语言：','小组主题：','测验。','学生。']
        }
    },
    "viewCuestionarioInfo": {
        "textEspanol": {
            texts: ['Datos cuestionario.','Datos cuestionario.','Datos cuestionario.','Volver','Docente:','Alias:','Contacto:','Datos de cuestionario','Datos de cuestionario','Grupo','Lenguaje','Temas','Tipo','Tiempo límite','Fecha límite','Número de intentos máximo','Comenzar','¿Desea responder el cuestionario?','Se recomienda que este preparado, ya que el cuestionario no se puede pausar.','Comenzar']
        },
        "textIngles": {
            texts: ['Test data.','Test data.','Test data.','Return','Teacher:','Alias:','Contact:','Test data','Test data','Cluster','Language','Topics','Guy','time limit','Deadline','Maximum number of attempts','Begin','Do you want to answer the Test?','It is recommended that you be prepared, as the quiz cannot be paused.','Begin']
        },
        "textPortugues": {
            texts: ['Dados do questionário.','Dados do questionário.','Dados do questionário.','Retornar','Professor@:','Alias:','Contato:','Dados do questionário','Dados do questionário','Clase','Linguagem','Tópicos','Cara','limite de tempo','Data limite','Número máximo de tentativas','Começar','Quer responder ao questionário?','Recomenda-se que você esteja preparado, pois o questionário não pode ser pausado.','Começar']
        },
        "textChino": {
            texts: ['问卷数据。','问卷数据。','问卷数据。','返回','老师：','别名：','接触：','问卷数据','问卷数据','簇','语','话题','家伙','时限','最后期限','最大尝试次数','开始','你想回答问卷吗？','建议您做好准备,因为测验不能暂停。','开始']
        }
    },
    "cuestionarioPendiente": {
        "textEspanol": {
            texts: ['Datos cuestionario.','Datos cuestionario.','Datos cuestionario.','Volver','Docente:','Alias:','Contacto:','Datos de cuestionario','Datos de cuestionario','Grupo','Lenguaje','Temas','Tipo','Tiempo límite','Fecha límite','Número de intentos máximo','Comenzar','¿Desea responder el cuestionario?','Se recomienda que este preparado, ya que el cuestionario no se puede pausar.','Comenzar']
        },
        "textIngles": {
            texts: ['Test data.','Test data.','Test data.','Return','Teacher:','Alias:','Contact:','Test data','Test data','Cluster','Language','Topics','Guy','time limit','Deadline','Maximum number of attempts','Begin','Do you want to answer the Test?','It is recommended that you be prepared, as the quiz cannot be paused.','Begin']
        },
        "textPortugues": {
            texts: ['Dados do questionário.','Dados do questionário.','Dados do questionário.','Retornar','Professor@:','Alias:','Contato:','Dados do questionário','Dados do questionário','Clase','Linguagem','Tópicos','Cara','limite de tempo','Data limite','Número máximo de tentativas','Começar','Quer responder ao questionário?','Recomenda-se que você esteja preparado, pois o questionário não pode ser pausado.','Começar']
        },
        "textChino": {
            texts: ['问卷数据。','问卷数据。','问卷数据。','返回','老师：','别名：','接触：','问卷数据','问卷数据','簇','语','话题','家伙','时限','最后期限','最大尝试次数','开始','你想回答问卷吗？','建议您做好准备,因为测验不能暂停。','开始']
        }
    },
    "answerCuestionarioAlumno": {
        "textEspanol": {
            //Cuando entramos a contestar el cuestionario
            texts_1: ['Contestar cuestionario.','Contestar cuestionario.','Contestar cuestionario.','Volver','Tablero de información.','Total preguntas:','Respondidas:','Límite:','Minutos restantes:','Caducidad:','Intentos:','Entregar','Preguntas cuestionario','¿Desea enviar el cuestionario?','Este procedimiento no se puede revertir.','Enviar'],
            //Cuando ya no hay intentos
            texts_2: ['Se han terminado los intentos','Intentos.','Intentos.','Volver','Usted ha agotado su número máximo de intentos.','Usted ha agotado su número máximo de intentos.','Ha usted superado el número máximo de intentos posibles para este cuestionario, comuniquese con su docente para más información.','Regresar'],
            //Cuando sigue pendiente
            texts_3: ['La evaluación sigue pendiente.','Pendiente.','Pendiente.','Volver','Debe esperar a que su docente evalué algunas preguntas.','Debe esperar a que su docente evalué algunas preguntas.','Algunas preguntas del cuestionario deben ser evaluadas de manera manual por el docente.','Regresar'],
            //Cuando la evalaucion esta lista
            texts_4: ['La evaluación ha sido terminada.','Terminado.','Terminado.','Volver','La revisión ha sido terminada.','La revisión ha sido terminada.','El resultado ha sido registrado satisfactoriamente.','Regresar','Apelar resultado','Retroalimentación.','Escriba un comentario de retroalimentación para este curso y su profesor podrá saber las areas de oportunidad en las evaluaciones.','Feedback','Enviar'],
        },
        "textIngles": {
            texts_1: ['Answer test.','Answer test.','Answer test.','Return','Information board.','Total questions:','Answers:','Limit:','Remaining minutes:','Expiration:','Attempts:','Deliver','Quiz questions','Do you want to send the test?','This procedure cannot be reversed.','Send'],
            texts_2: ['The attempts are over','Attempts.','Attempts.','Return','You have exhausted your maximum number of attempts.','You have exhausted your maximum number of attempts.','You have exceeded the maximum number of possible attempts for this quiz, contact your teacher for more information.','Return'],
            texts_3: ['Evaluation is still pending.','Pending result.','Pending result.','Return','You must wait for your teacher to evaluate some questions.','You must wait for your teacher to evaluate some questions.','Some questions in the test must be evaluated manually by the teacher.','Return'],
            texts_4: ['The evaluation has been finished.','Finished.','Finished.','Return','The review has been completed.','The review has been completed.','The result has been registered successfully.','Return','Appeal result','Feedback.','Write a feedback comment for this course and your teacher will know the areas of opportunity in the evaluations.','Feedback','Send'],
        },
        "textPortugues": {
            texts_1: ['Responder test.','Responder test.','Responder test.','Retornar','Painel de informações.','Total de perguntas:','Respostas:','Limite:','Minutos restantes:','Expiração:','Tentativas:','Entregar','Perguntas do questionário','Deseja enviar o questionário?','Este procedimento não pode ser revertido.','Mandar'],
            texts_2: ['As tentativas acabaram','Tentativas.','Tentativas.','Retornar','Você esgotou seu número máximo de tentativas.','Você esgotou seu número máximo de tentativas.','Você excedeu o número máximo de tentativas possíveis para este questionário, entre em contato com seu professor para obter mais informações.','Voltar'],
            texts_3: ['A avaliação ainda está pendente.','Resultado pendente.','Resultado pendente.','Retornar','Você deve esperar que seu professor avalie algumas questões.','Você deve esperar que seu professor avalie algumas questões.','Algumas questões do questionário devem ser avaliadas manualmente pelo professor.','Voltar'],
            texts_4: ['A avaliação foi finalizada.','Finalizado.','Finalizado.','Retornar','A revisão foi concluída.','A revisão foi concluída.','O resultado foi registrado com sucesso.','Voltar','Resultado da apelação','Comentários.','Escreva um comentário de feedback para este curso e seu professor saberá as áreas de oportunidade nas avaliações.','Comentários','Mandar'],
        },
        "textChino": {
            texts_1: ['回答问卷。','回答问卷。','回答问卷。','返回','信息板。','总问题：','答案：','限制：','剩余分钟数：','过期：','尝试：','递送','测验问题','你想发送问卷吗？','此过程不可逆。','发送'],
            texts_2: ['尝试结束','尝试。','尝试。','返回','您已经用尽了最大尝试次数。','您已经用尽了最大尝试次数。','您已超过此测验的最大尝试次数,请联系您的老师以获取更多信息。','返回'],
            texts_3: ['评估仍在进行中。','结果待定','结果待定','返回','你必须等待你的老师评估一些问题。','你必须等待你的老师评估一些问题。','问卷中有些问题必须由老师人工评价。','返回'],
            texts_4: ['评估已完成。','完成的。','完成的。','返回','审核已完成。','审核已完成。','结果已注册成功。','返回','申诉结果','反馈。','为这门课程写一个反馈评论,你的老师就会知道评估中的机会领域。','反馈','发送']
        }
    },
    "cuestionarioListo": {
        "textEspanol": {
            texts: ['Datos cuestionario.','Datos cuestionario.','Datos cuestionario.','Volver','Docente:','Alias:','Contacto:','Datos de cuestionario','Datos de cuestionario','Grupo','Lenguaje','Temas','Tipo','Tiempo límite','Fecha límite','Número de intentos máximo','Comenzar','¿Desea responder el cuestionario?','Se recomienda que este preparado, ya que el cuestionario no se puede pausar.','Comenzar']
        },
        "textIngles": {
            texts: ['Test data.','Test data.','Test data.','Return','Teacher:','Alias:','Contact:','Test data','Test data','Cluster','Language','Topics','Guy','time limit','Deadline','Maximum number of attempts','Begin','Do you want to answer the Test?','It is recommended that you be prepared, as the quiz cannot be paused.','Begin']
        },
        "textPortugues": {
            texts: ['Dados do questionário.','Dados do questionário.','Dados do questionário.','Retornar','Professor@:','Alias:','Contato:','Dados do questionário','Dados do questionário','Clase','Linguagem','Tópicos','Cara','limite de tempo','Data limite','Número máximo de tentativas','Começar','Quer responder ao questionário?','Recomenda-se que você esteja preparado, pois o questionário não pode ser pausado.','Começar']
        },
        "textChino": {
            texts: ['问卷数据。','问卷数据。','问卷数据。','返回','老师：','别名：','接触：','问卷数据','问卷数据','簇','语','话题','家伙','时限','最后期限','最大尝试次数','开始','你想回答问卷吗？','建议您做好准备,因为测验不能暂停。','开始']
        }
    },
    "noIntentosDisponibles": {
        "textEspanol": {
            texts: ['Datos cuestionario.','Datos cuestionario.','Datos cuestionario.','Volver','Docente:','Alias:','Contacto:','Datos de cuestionario','Datos de cuestionario','Grupo','Lenguaje','Temas','Tipo','Tiempo límite','Fecha límite','Número de intentos máximo','Comenzar','¿Desea responder el cuestionario?','Se recomienda que este preparado, ya que el cuestionario no se puede pausar.','Comenzar']
        },
        "textIngles": {
            texts: ['Test data.','Test data.','Test data.','Return','Teacher:','Alias:','Contact:','Test data','Test data','Cluster','Language','Topics','Guy','time limit','Deadline','Maximum number of attempts','Begin','Do you want to answer the Test?','It is recommended that you be prepared, as the quiz cannot be paused.','Begin']
        },
        "textPortugues": {
            texts: ['Dados do questionário.','Dados do questionário.','Dados do questionário.','Retornar','Professor@:','Alias:','Contato:','Dados do questionário','Dados do questionário','Clase','Linguagem','Tópicos','Cara','limite de tempo','Data limite','Número máximo de tentativas','Começar','Quer responder ao questionário?','Recomenda-se que você esteja preparado, pois o questionário não pode ser pausado.','Começar']
        },
        "textChino": {
            texts: ['问卷数据。','问卷数据。','问卷数据。','返回','老师：','别名：','接触：','问卷数据','问卷数据','簇','语','话题','家伙','时限','最后期限','最大尝试次数','开始','你想回答问卷吗？','建议您做好准备,因为测验不能暂停。','开始']
        }
    },
    "revisarAlumno": {
        "textEspanol": {
            texts: ['Sus resultados.','Sus resultados.','Sus resultados.','Volver',' Estas son sus respuestas, el cuestionario fue evaluado en su totalidad.',' Estas son sus respuestas, pero algunas cuantas faltan por ser revisadas por el docente.','Resultados','Preguntas y puntaje','Preguntas y puntaje','Aceptar','Preguntas/Respuestas cuestionario']
        },
        "textIngles": {
            texts: ['Your results.','Your results.','Your results.','Return',' These are your answers, the test was evaluated in its entirety.',' These are their answers, but a few remain to be reviewed by the teacher.','Results','Questions and scoring','Questions and scoring','Accept','Questions/Answers test']
        },
        "textPortugues": {
            texts: ['Seus resultados.','Seus resultados.','Seus resultados.','Retornar',' Estas são suas respostas, o questionário foi avaliado em sua totalidade.',' Estas são as respostas deles, mas algumas ainda precisam ser revisadas pelo professor.','Resultados','Perguntas e pontuação','Perguntas e pontuação','Aceitar','Questionário de perguntas/respostas']
        },
        "textChino": {
            texts: ['你的结果。','你的结果。','你的结果。','返回',' 这些是您的答案,问卷已经过完整评估。',' 这些是他们的答案,但还有一些有待老师审阅。','结果','问题和评分','问题和评分','接受','问答问卷']
        }
    },
    "resultadoAlumno": {
        "textEspanol": {
            texts_3: ['La evaluación sigue pendiente.','Pendiente.','Pendiente.','Volver','Debe esperar a que su docente evalué algunas preguntas.','Debe esperar a que su docente evalué algunas preguntas.','Algunas preguntas del cuestionario deben ser evaluadas de manera manual por el docente.','Regresar'],
            texts_4: ['La evaluación ha sido terminada.','Terminado.','Terminado.','Volver','La revisión ha sido terminada.','La revisión ha sido terminada.','El resultado ha sido registrado satisfactoriamente.','Regresar','Apelar resultado','Retroalimentación.','Escriba un comentario de retroalimentación para este curso y su profesor podrá saber las areas de oportunidad en las evaluaciones.','Feedback','Enviar'],
        },
        "textIngles": {
            texts_3: ['Evaluation is still pending.','Pending result.','Pending result.','Return','You must wait for your teacher to evaluate some questions.','You must wait for your teacher to evaluate some questions.','Some questions in the test must be evaluated manually by the teacher.','Return'],
            texts_4: ['The evaluation has been finished.','Finished.','Finished.','Return','The review has been completed.','The review has been completed.','The result has been registered successfully.','Return','Appeal result','Feedback.','Write a feedback comment for this course and your teacher will know the areas of opportunity in the evaluations.','Feedback','Send'],
        },
        "textPortugues": {
            texts_3: ['A avaliação ainda está pendente.','Resultado pendente.','Resultado pendente.','Retornar','Você deve esperar que seu professor avalie algumas questões.','Você deve esperar que seu professor avalie algumas questões.','Algumas questões do questionário devem ser avaliadas manualmente pelo professor.','Voltar'],
            texts_4: ['A avaliação foi finalizada.','Finalizado.','Finalizado.','Retornar','A revisão foi concluída.','A revisão foi concluída.','O resultado foi registrado com sucesso.','Voltar','Resultado da apelação','Comentários.','Escreva um comentário de feedback para este curso e seu professor saberá as áreas de oportunidade nas avaliações.','Comentários','Mandar'],
        },
        "textChino": {
            texts_3: ['评估仍在进行中。','结果待定','结果待定','返回','你必须等待你的老师评估一些问题。','你必须等待你的老师评估一些问题。','问卷中有些问题必须由老师人工评价。','返回'],
            texts_4: ['评估已完成。','完成的。','完成的。','返回','审核已完成。','审核已完成。','结果已注册成功。','返回','申诉结果','反馈。','为这门课程写一个反馈评论,你的老师就会知道评估中的机会领域。','反馈','发送']
        }
    },
    "gestionar_resultados_alumno": {
        "textEspanol": {
            texts: ['Mis resultados','Mis resultados','Mis resultados.','Volver','Panel global','Panel global']
        },
        "textIngles": {
            texts: ['My results','My results','My results.','Return','Global Dashboard','Global Dashboard']
        },
        "textPortugues": {
            texts: ['Meus resultados','Meus resultados','Meus resultados.','Retornar','Painel Global','Painel Global']
        },
        "textChino": {
            texts: ['我的成绩','我的成绩','我的结果。','返回','全球仪表板','全球仪表板']
        }
    },
    "editarPostAlumno": {
        "textEspanol": {
            texts: ['Editar post.','Editar post.','Editar post.','Volver','Formulario de edición.','Formulario de edición.','Datos del POST','Titulo del post','Descripción del post','Multimedia','URL de imagen','Editar']
        },
        "textIngles": {
            texts: ['Edit post.','Edit post.','Edit post.','Return','Edit form.','Edit form.','POST data','Post title','Post description','Multimedia','image url','Edit']
        },
        "textPortugues": {
            texts: ['Editar post.','Editar post.','Editar post.','Retornar','Editar formulário.','Editar formulário.','Dados de postagem','Título da postagem','Descrição da postagem','Multimídia','imagem URL','Editar']
        },
        "textChino": {
            texts: ['编辑帖子。','编辑帖子。','编辑帖子。','返回','编辑表格。','编辑表格。','发布数据','帖子标题','帖子描述','多媒体','图片网址','编辑']
        }
    },
    "editarPost": {
        "textEspanol": {
            texts: ['Editar post.','Editar post.','Editar post.','Volver al inicio','Formulario de edición.','Formulario de edición.','Datos del POST','Titulo del post','Descripción del post','Multimedia','URL de imagen','Editar']
        },
        "textIngles": {
            texts: ['Edit post.','Edit post.','Edit post.','Back to top','Edit form.','Edit form.','POST data','Post title','Post description','Multimedia','image url','Edit']
        },
        "textPortugues": {
            texts: ['Editar post.','Editar post.','Editar post.','Voltar ao início','Editar formulário.','Editar formulário.','Dados de postagem','Título da postagem','Descrição da postagem','Multimídia','imagem URL','Editar']
        },
        "textChino": {
            texts: ['编辑帖子。','编辑帖子。','编辑帖子。','回到顶部','编辑表格。','编辑表格。','发布数据','帖子标题','帖子描述','多媒体','图片网址','编辑']
        }
    },
    "gestionar_cuestionarios": {
        "textEspanol": {
            texts: ['Gestión de cuestionarios.','Cuestionarios.','Cuestionarios.','Volver','Operaciones.','Crear cuestionario','Revisar','Buscador.','Buscar','Conteo.','Cuestionarios:','Estudiantes:','Cuestionarios creados','Cuestionarios creados']
        },
        "textIngles": {
            texts: ['Management of tests.','Manage tests.','Manage tests.','Return','Operations.','Create test','Check','Browser.','Search','Count.','Tests:','Students:','Created tests','Created tests']
        },
        "textPortugues": {
            texts: ['Gestão de questionários.','Questionário.','Questionário.','Retornar','Operações.','Criar questionário','Verificar','Buscador.','Procurar','Contar.','Questionário:','Estudantes:','Questionários criados','Questionários criados']
        },
        "textChino": {
            texts: ['问卷的管理。','测验。','测验。','返回','操作','创建问卷','查看','探索者','搜索','数数。','测验：','学生：','创建问卷','创建问卷']
        }
    },
    "editCuestionario": {
        "textEspanol": {
            texts: ['Editar datos del cuestionarios.','Información adicional.','Información adicional.','Volver','Estructura principal','Datos adicionales','Formulario de edición.','Datos de creación','Autor del cuestionario','Fecha de Creación','Tiempo de la prueba','Hora límite para resolver','Día límite para resolver','Tiempo cuenta regresiva (hh:mm)','Número de intentos','Datos del cuestionario','Nombre de cuestionario','Temas del cuestionario','Escriba el tipo','Aleatorio','Por orden de creación','Por tipo de pregunta','Orden de cuestionario','Escriba el lenguaje','Editar']
        },
        "textIngles": {
            texts: ['Edit test data.','Additional Information.','Additional Information.','Return','Principal structure','Additional data','Edit form.','Creation data','Author of the test','Creation date','Trial time','Deadline time to solve','Deadline day to solve','Countdown time (hh:mm)','Number of attemps','test data','Quiz name','Quiz Topics','Type the type','Random','By order of creation','By type of question','Quiz Order','Type the language','Edit']
        },
        "textPortugues": {
            texts: ['Editar dados do questionário.','Informação adicional.','Informação adicional.','Retornar','Estrutura principal','Dados adicionais','Editar formulário.','Dados de criação','Autor do questionário','Data de criação','Tempo de prova','Prazo para resolver','Dia do prazo para resolver','Tempo de contagem regressiva (hh:mm)','Número de tentativas','Dados do questionário','Nome do questionário','Tópicos do questionário','Digite o tipo','Aleatório','Por ordem de criação','Por tipo de pergunta','Pedido do questionário','Digite o idioma','Editar']
        },
        "textChino": {
            texts: ['编辑问卷数据。','附加信息。','附加信息。','返回','主体结构','附加数据','编辑表格。','创建数据','问卷作者','创建日期','试用时间','截止时间解决','deadline day to solve','倒计时 (hh:mm)','尝试次数','问卷数据','测验名称','测验主题','输入类型','随机的','按创建顺序','按问题类型','测验订单','输入语言','编辑']
        }
    },
    "creacion_cuestionarios": {
        "textEspanol": {
            texts: [
                'Crear cuestionario.',
                'Crear cuestionario.',
                'Crear cuestionario.',
                'Volver',
                'Tipos de pregunta',
                'Opción múltiple',
                'Rellenar espacios',
                'Ejercicios',
                'Arrastrar',
                'Falso/Verdadero',
                'Pregunta abierta',
                'Mis cuestionarios',
                'Banco de preguntas',
                'Titulo del cuestionario',
                'Listo',
                'Generando archivo JSON',
                'El cuestionario será almacenado como archivo JSON, usted puede guardar una copia del cuestionario si asi lo desea.',
                'Puede anexar algún JSON que haya descargado previamente.',
                'Preview de cuestionario JSON',
                'Descargar',
                'Guardar',
                'Duplica cuestionario guardado',
                'Seleccione algún JSON que ya estuviera en existencia de cuestionarios anteriores. ',
                'Secreará una copia del documento y usted podra editar la data.',
                'Cuestionarios anteriores.',
                'Archivo de cuestionario',
                'Cargar/Duplicar',
                'Estructura principal',
                'Datos adicionales',
                'Opción multiple',
                'Diseñe preguntas de opción múltiples primero definiendo la preguntas, luego las opciones y por último la opción correcta.',
                'Defina la pregunta',
                'Describa la pregunta o interrogante a responder.',
                'Pregunta',
                'Imagen del problema(url)',
                'Defina las opciones',
                'Escriba las posibles opciones para la pregunta que se planteó y determine la respuesta correcta.',
                'Correcta',
                'Opción A',
                'Correcta',
                'Opción B',
                'Correcta',
                'Opción C',
                'Correcta',
                'Opción D',
                'Guardar',
                'Agregar',
                'Limpiar todo',
                'Rellenar espacios',
                'Ingrese un texto en el formulario, y posteriormente agregue los espacio en el texto de modo que el estudiante pueda completar con la respuesta correcta.',
                'Defina el texto',
                'Escriba la estructura que tendra el texto.',
                'Escriba el texto a completar',
                'Defina los espacios',
                'Agregue espacio a la estructura del texto de modo que puedan ser acompletados por el estudiante.',
                'Guardar',
                'Espacio',
                'Espacio',
                'Ejercicios',
                'Ingrese la descripción de un ejercicio y adjunte un código para retroalimentar el ejercicio una vez que el estudiante suba su propuesta de solución al problema que usted planteó',
                'Describa el ejercicio',
                'Escriba una descripción del problema/ejercicios a resolver para que sus alumnos conozcan a que resultado llegar.',
                'Descripción del problema',
                'Imagen (url)',
                'Salida esperada (opcional)',
                'Código de retroalimentación',
                'Escriba el código con la propuesta de solución para que el alumno pueda recibir retroalimentación, puede anexar un documento para leer el código o inclusive adjuntar algún enlace para dar acceso a documentos en linea.',
                'Código de archivo',
                'Adjuntar enlace a carpeta online (múltiples archivos)',
                'Enlace de carpeta',
                'Código escrito manualmente',
                'Código a mano',
                'Vista previa del código',
                'Guardar',
                'Limpiar',
                'Arrastrar y ordenar',
                'Ingrese en la columna A el concepto y en la columna B la definición (el concepto y la definición deben estar a la misma altura)',
                'Descripción del ejercicio',
                'Descripción del ejercicio',
                'Conceptos (A)',
                'Definiciones (B)',
                'Guardar',
                'Agregar',
                'Eliminar',
                'Falso y verdadero',
                'Ingrese una pregunta y determine la opción correcta',
                'Pregunta',
                'Pregunta',
                'Respuesta',
                'Escribe F en caso de que sea falso o T en caso de que sea verdad.',
                'Guardar',
                'Pregunta abierta',
                'Ingrese una pregunta (esta pregunta requiere revisión manual por parte del docente)',
                'Pregunta',
                'Pregunta',
                'Video (opcional)',
                'Imagen (opcional)',
                'Guardar']
        },
        "textIngles": {
            texts: ['Create test.',
            'Create test.',
            'Create test.',
            'Return',
            'Question types',
            'Multiple choice',
            'Fill in the blanks',
            'Training',
            'Drag',
            'False true',
            'Open question',
            'My tests',
            'Question bank',
            'Title of the test',
            'Done',
            'Generating JSON file',
            'The test will be stored as a JSON file, you can save a copy of the test if you wish.',
            'You can append some JSON that you have previously downloaded.',
            'JSON test preview',
            'Download',
            'Save',
            'Duplicate saved test',
            'Select any JSON that was already in stock from previous tests. ',
            'A copy of the document will be created and you will be able to edit the data.',
            'Previous tests.',
            'Quiz file',
            'Load/Duplicate',
            'Principal structure',
            'Additional data',
            'Multiple choice',
            'Design multiple choice questions by first defining the question, then the options, and finally the correct option.',
            'Define the question',
            'Describe the question or query to answer.',
            'Question',
            'Problem image(url)',
            'Define the options',
            'Write down the possible options for the question that was asked and determine the correct answer.',
            'correct',
            'Option A',
            'correct',
            'Option B',
            'correct',
            'Option C',
            'correct',
            'Option D',
            'Save',
            'Add',
            'Clear all',
            'Fill in the blanks',
            'Enter a text in the form, and then add spaces in the text so that the student can fill in the correct answer.',
            'Define the text',
            'Write the structure that the text will have.',
            'Write the text to complete',
            'Define spaces',
            'Add space to the structure of the text so that they can be completed by the student.',
            'Save',
            'Space',
            'Space',
            'Training',
            'Enter the description of an exercise and attach a code to provide feedback to the exercise once the student uploads their proposed solution to the problem you raised',
            'Describe the exercise',
            'Write a description of the problem/exercises to be solved so that your students know what result to arrive at.',
            'Description of the problem',
            'image(url)',
            'Expected output (optional)',
            'Feedback code',
            'Write the code with the solution proposal so that the student can receive feedback, you can attach a document to read the code or even attach a link to give access to online documents.',
            'file code',
            'Attach link to online folder (multiple files)',
            'folder link',
            'Manually written code',
            'Code by hand',
            'Code preview',
            'Save',
            'Clean up',
            'Drag and Sort',
            'Enter in column A the concept and in column B the definition (the concept and the definition must be at the same height)',
            'Description of the exercise',
            'Description of the exercise',
            'Concepts (A)',
            'Definitions (B)',
            'Save',
            'Add',
            'Remove',
            'False and true',
            'Enter a question and determine the correct option',
            'Question',
            'Question',
            'Response',
            'Write F if it is false or T if it is true.',
            'Save',
            'Open question',
            'Enter a question (this question requires manual review by the teacher)',
            'Question',
            'Question',
            'Video (optional)',
            'Image (optional)',
            'Save']
        },
        "textPortugues": {
            texts: ['Criar questionário.',
            'Criar questionário.',
            'Criar questionário.',
            'Retornar',
            'Tipos de perguntas',
            'Múltipla escolha',
            'Preencha os espaços em branco',
            'Treinamento',
            'Arrastar',
            'Falso verdadeiro',
            'Questão aberta',
            'Meus questionários',
            'Banco de perguntas',
            'Título do questionário',
            'Inteligente',
            'Gerando arquivo JSON',
            'O questionário será armazenado como um arquivo JSON, você pode salvar uma cópia do questionário, se desejar.',
            'Você pode anexar algum JSON que você baixou anteriormente.',
            'Visualização do questionário JSON',
            'Descarga',
            'Salvar',
            'Questionário salvo duplicado',
            'Selecione qualquer JSON que já estava em estoque de questionários anteriores. ',
            'Será criada uma cópia do documento e você poderá editar os dados.',
            'Questionários anteriores.',
            'Arquivo de questionário',
            'Carregar/Duplicar',
            'Estrutura principal',
            'Dados adicionais',
            'Múltipla escolha',
            'Projete perguntas de múltipla escolha definindo primeiro a pergunta, depois as opções e, finalmente, a opção correta.',
            'Definir a pergunta',
            'Descreva a pergunta ou consulta a ser respondida.',
            'Perguntar',
            'Imagem com problema (url)',
            'Definir as opções',
            'Escreva as opções possíveis para a pergunta que foi feita e determine a resposta correta.',
            'correto',
            'Opção A',
            'correto',
            'Opção B',
            'correto',
            'Opção C',
            'correto',
            'Opção D',
            'Salvar',
            'Adicionar',
            'Limpar tudo',
            'Preencha os espaços em branco',
            'Insira um texto no formulário e, em seguida, adicione espaços no texto para que o aluno possa preencher a resposta correta.',
            'Definir o texto',
            'Escreva a estrutura que o texto terá.',
            'Escreva o texto para completar',
            'Definir espaços',
            'Adicionar espaço à estrutura do texto para que possam ser completados pelo aluno.',
            'Salvar',
            'Espaço',
            'Espaço',
            'Treinamento',
            'Digite a descrição de um exercício e anexe um código para fornecer feedback ao exercício assim que o aluno enviar sua proposta de solução para o problema que você levantou',
            'Descreva o exercício',
            'Escreva uma descrição do problema/exercícios a serem resolvidos para que seus alunos saibam a que resultado chegar.',
            'Descrição do problema',
            'imagem URL)',
            'Saída esperada (opcional)',
            'Código de feedback',
            'Escreva o código com a proposta de solução para que o aluno possa receber feedback, você pode anexar um documento para ler o código ou até mesmo anexar um link para dar acesso a documentos online.',
            'código de arquivo',
            'Anexar link à pasta online (vários arquivos)',
            'link da pasta',
            'Código escrito manualmente',
            'Código à mão',
            'Visualização do código',
            'Salvar',
            'Limpar',
            'Arrastar e Classificar',
            'Digite na coluna A o conceito e na coluna B a definição (o conceito e a definição devem estar na mesma altura)',
            'Descrição do exercício',
            'Descrição do exercício',
            'Conceitos (A)',
            'Definições (B)',
            'Salvar',
            'Adicionar',
            'Remover',
            'Falso e verdadeiro',
            'Digite uma pergunta e determine a opção correta',
            'Perguntar',
            'Perguntar',
            'Resposta',
            'Escreva F se for falso ou T se for verdadeiro.',
            'Salvar',
            'Questão aberta',
            'Digite uma pergunta (esta pergunta requer revisão manual pelo professor)',
            'Perguntar',
            'Perguntar',
            'Vídeo (opcional)',
            'Imagem (opcional)',
            'Salvar']
        },
        "textChino": {
            texts: ['创建问卷。',
            '创建问卷。',
            '创建问卷。',
            '返回',
            '问题类型',
            '多项选择',
            '填空',
            '训练',
            '拖',
            '假真',
            '开放式问题',
            '我的问卷',
            '问题库',
            '问卷标题',
            '聪明的',
            '生成 JSON 文件',
            '问卷将存储为 JSON 文件,如果您愿意,可以保存问卷的副本。',
            '您可以附加一些您之前下载的 JSON。',
            'JSON问卷预览',
            '释放',
            '节省',
            '重复保存问卷',
            '从以前的问卷中选择任何已经存货的 JSON。 ',
            '将创建文档的副本,您将能够编辑数据。',
            '以前的问卷调查。',
            '测验文件',
            '加载/复制',
            '主体结构',
            '附加数据',
            '多项选择',
            '通过首先定义问题,然后是选项,最后是正确选项来设计多项选择题。',
            '定义问题',
            '描述要回答的问题或查询。',
            '问',
            '问题图片（网址）',
            '定义选项',
            '写下所问问题的可能选项并确定正确答案。',
            '正确的',
            '选项A',
            '正确的',
            '选项 B',
            '正确的',
            '选项C',
            '正确的',
            '选项D',
            '节省',
            '添加',
            '全部清除',
            '填空',
            '在表格中输入一段文字,然后在文字中添加空格,以便学生填写正确答案。',
            '定义文本',
            '写下文本的结构。',
            '写完文字',
            '定义空间',
            '在文本结构中添加空格,以便学生完成。',
            '节省',
            '空间',
            '空间',
            '训练',
            '输入练习的描述并附上代码,以便在学生上传他们针对您提出的问题的建议解决方案后向练习提供反馈',
            '描述练习',
            '写下要解决的问题/练习的描述,以便您的学生知道要达到什么结果。',
            '问题描述',
            '图片（网址）',
            '预期输出（可选）',
            '反馈代码',
            '用解决方案提案编写代码,以便学生可以收到反馈,您可以附上文档以阅读代码,甚至可以附上链接以访问在线文档。',
            '文件代码',
            '附加在线文件夹的链接（多个文件）',
            '文件夹链接',
            '手写代码',
            '手工编码',
            '代码预览',
            '节省',
            '清理',
            '拖放排序',
            '在A列输入概念,在B列输入定义（概念和定义必须在同一高度）',
            '练习描述',
            '练习描述',
            '概念（A）',
            '定义（B）',
            '节省',
            '添加',
            '消除',
            '虚假和真实',
            '输入问题并确定正确的选项',
            '问',
            '问',
            '回复',
            '如果为假则写 F,如果为真则写 T。',
            '节省',
            '开放式问题',
            '输入一道题（此题需要老师人工审核）',
            '问',
            '问',
            '视频（可选）',
            '图片（可选）',
            '节省']
        }
    },
    "saber_mas2": {
        "textEspanol": {
            texts: []
        },
        "textIngles": {
            texts: []
        },
        "textPortugues": {
            texts: []
        },
        "textChino": {
            texts: []
        }
    },
    "saber_mas2": {
        "textEspanol": {
            texts: []
        },
        "textIngles": {
            texts: []
        },
        "textPortugues": {
            texts: []
        },
        "textChino": {
            texts: []
        }
    },
    "saber_mas2": {
        "textEspanol": {
            texts: []
        },
        "textIngles": {
            texts: []
        },
        "textPortugues": {
            texts: []
        },
        "textChino": {
            texts: []
        }
    },
    "saber_mas2": {
        "textEspanol": {
            texts: []
        },
        "textIngles": {
            texts: []
        },
        "textPortugues": {
            texts: []
        },
        "textChino": {
            texts: []
        }
    },
    "saber_mas2": {
        "textEspanol": {
            texts: []
        },
        "textIngles": {
            texts: []
        },
        "textPortugues": {
            texts: []
        },
        "textChino": {
            texts: []
        }
    },
}

export default rutas;