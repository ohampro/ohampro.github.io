{% assign titleDesc = include.item | split: ': ' %}
{% if titleDesc.size == 2 %}
{{ include.indent }}- **{{ titleDesc[0] }}**: {{ titleDesc[1] }}
{% else %}
{{ include.indent }}- {{ include.item }}
{% endif %}