{% for item in include.data %}
    {% assign titleDesc = item | split: ': ' %}
    {% if titleDesc.size == 2 %}
{{ include.ident }}- **{{ titleDesc[0] }}**: {{ titleDesc[1] }}
    {% else %}
{{ include.ident }}- {{ item }}
    {% endif %}
{% endfor %}