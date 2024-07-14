{% for item in include.data limit:include.limit %}
    {% assign firstItem = item | first %}

    {% if firstItem == nil %}
        {% include md_list_item.md item=item indent=include.indent %}

    {% elsif item.size == 2 %}
        {% include md_list_keyvalue.md item=item indent=include.indent %}

    {% else %}
        {% for keyValue in item %}
            {% include md_list_keyvalue.md item=keyValue indent=include.indent %}
        {% endfor %}
    {% endif %}
{% endfor %}