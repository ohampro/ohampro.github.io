{% assign key = include.item[0] %}
{% assign value = include.item[1] %}

{% assign firstItem = value | first %}
{% if firstItem == nil %}
    {% assign firstItem = key | append: ': ' | append: value %}
    {% include md_list_item.md item=firstItem indent=include.indent %}

{% else %}
    {% include md_list_item.md item=key indent=include.indent bold=true %}
    {% assign indent = include.indent | append: '  ' %}
    {% include md_list.md data=value indent=indent %}

{% endif %}